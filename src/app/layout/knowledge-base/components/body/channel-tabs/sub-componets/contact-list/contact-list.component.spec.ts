import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactListComponent } from './contact-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BehaviorService } from 'app/shared/services/behavior.service';
import { of, BehaviorSubject } from 'rxjs';
import { ListSchema, NumberSchema } from 'app/models/phone-number.model';

// Mock BehaviorService to control observable responses
class MockBehaviorService {
  private imageUrlSubject = new BehaviorSubject<string | null>(null);
  public imageUrl$ = this.imageUrlSubject.asObservable();
  private phoneNumberSubject = new BehaviorSubject<NumberSchema | null>(null);
  public phoneNumberData$ = this.phoneNumberSubject.asObservable();
  public isFormVisiable = new BehaviorSubject<boolean>(false);

  updateImageUrl(newUrl: string) {
    this.imageUrlSubject.next(newUrl);
  }

  updatePhoneData(data: NumberSchema) {
    this.phoneNumberSubject.next(data);
  }
}

describe('ContactListComponent', () => {
  let component: ContactListComponent;
  let fixture: ComponentFixture<ContactListComponent>;
  let behaviorService: MockBehaviorService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactListComponent, HttpClientModule],
      providers: [{ provide: BehaviorService, useClass: MockBehaviorService }]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactListComponent);
    component = fixture.componentInstance;
    behaviorService = TestBed.inject(BehaviorService) as unknown as MockBehaviorService; // Cast to mock

    // Initialize local storage mocks
    spyOn(localStorage, 'getItem').and.returnValue(JSON.stringify([]));
    spyOn(localStorage, 'setItem');

    fixture.detectChanges(); // Trigger ngOnInit
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize phoneNumberList from local storage', () => {
    expect(component.phoneNumberList).toEqual([]);
    expect(localStorage.getItem).toHaveBeenCalledWith('phoneNumbers');
  });

  it('should subscribe to phoneNumberData$ and update phoneNumberList', () => {
    const mockPhoneData: NumberSchema = {
      enabled: true,
      SID: 'test_sid',
      authToken: 'test_auth_token',
      phoneNumbers: [
        {
          countryCode: '+31',
          phoneNumber: 123456789,
          whatsapp: true,
          sms: false,
          delay: 0,
          onlineMessage: 'Online',
          offlineMessage: 'Offline'
        }
      ]
    };

    // Update the mock data to simulate data coming from the service
    behaviorService.updatePhoneData(mockPhoneData);

    component.ngOnInit(); // Trigger ngOnInit to test subscription

    expect(component.phoneNumberList.length).toBe(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'phoneNumbers',
      JSON.stringify(component.phoneNumberList)
    );
  });

  it('should update isFormVisible based on BehaviorService', () => {
    behaviorService.isFormVisiable.next(true); // Change the BehaviorSubject to true
    component.ngOnInit(); // Trigger ngOnInit to test subscription
    expect(component.isFormVisible).toBe(true);
  });

  it('should log switch index in handleSwitch method', () => {
    const consoleLogSpy = spyOn(console, 'log');
    const index = 2;

    component.handleSwitch(index);

    expect(consoleLogSpy).toHaveBeenCalledWith('check the switch index', index);
  });
});
