import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChannelTabsComponent } from './channel-tabs.component';
import { PhoneNumberService } from 'app/shared/services/phone-number.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { of } from 'rxjs';
import { ContactListComponent } from './sub-componets/contact-list/contact-list.component';
import { NgClass } from '@angular/common';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxCountriesDropdownModule } from 'ngx-countries-dropdown';
import { InputDirective } from 'app/shared/custom-directive/input.directive';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BehaviorService } from 'app/shared/services/behavior.service';

describe('ChannelTabsComponent', () => {
  let component: ChannelTabsComponent;
  let fixture: ComponentFixture<ChannelTabsComponent>;
  let behaviorServiceMock: jasmine.SpyObj<BehaviorService>;
  let phoneNumberServiceMock: jasmine.SpyObj<PhoneNumberService>;
  let toastrServiceMock: jasmine.SpyObj<ToastrService>;

  beforeEach(async () => {

    phoneNumberServiceMock = jasmine.createSpyObj('PhoneNumberService', ['validateNumber']);
    toastrServiceMock = jasmine.createSpyObj('ToastrService', ['success', 'error']);

    await TestBed.configureTestingModule({
      imports: [
        FormsModule,
        NgClass,
        ContactListComponent,
        ReactiveFormsModule,
        InputDirective,
        NgxCountriesDropdownModule,
        NgSelectModule,
        HttpClientTestingModule,
        ToastrModule.forRoot()
      ],
      providers: [

        { provide: PhoneNumberService, useValue: phoneNumberServiceMock },
        { provide: ToastrService, useValue: toastrServiceMock },
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ChannelTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges(); // Trigger initial data binding
  });

  it('should create the ChannelTabsComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the phoneNumberForm with default values', () => {
    expect(component.phoneNumberForm).toBeDefined();
    expect(component.phoneNumberForm.get('accountSID')?.value).toBe('AC0f50b14fd91849603384563373');
    expect(component.phoneNumberForm.get('authToken')?.value).toBe('93b80d683fab86b5a2e756374792');
    expect(component.phoneNumberForm.get('dialCode')?.value).toBe('+31'); // Netherlands
  });

  it('should update country code when a country is changed', () => {
    const country = { dialling_code: '+49' }; // Germany
    component.onCountryChange(country);
    expect(component.countryCode).toBe('+49');
  });

  it('should validate phone number correctly', () => {
    const validResponse = { valid: true };
    phoneNumberServiceMock.validateNumber.and.returnValue(of(validResponse));
    component.phoneNumberForm.get('number')?.setValue('1234567890');
    component.validateNumber();

    expect(phoneNumberServiceMock.validateNumber).toHaveBeenCalled();
    expect(component.isNumberValid).toBe(true);

  });

  it('should save phone number correctly', () => {
    component.phoneNumberForm.setValue({
      accountSID: 'AC0f50b14fd91849603384563373',
      authToken: '93b80d683fab86b5a2e756374792',
      dialCode: '+31',
      number: '1234567890',
      smsCheckbox: true,
      whatsappCheckbox: false,
      delayTime: '0',
      onlineMessage: 'Hello',
      offlineMessage: 'Goodbye'
    });

    component.channelToggle = true; // Simulate toggle state
    spyOn(localStorage, 'setItem'); // Spy on localStorage.setItem
    component.savePhnNumber();

    expect(localStorage.setItem).toHaveBeenCalled();
    expect(toastrServiceMock.success).toHaveBeenCalledWith('Data is saved successfully!!');
  });

  it('should toggle the visibility of phone field', () => {
    component.addPhoneNumber();
    expect(component.isAddPhoneFieldVisiable).toBe(true);

  });
});
