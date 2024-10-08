import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgClass } from '@angular/common';
import { ContactListComponent } from './sub-componets/contact-list/contact-list.component';
import { BehaviorService } from 'app/shared/services/behavior.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputDirective } from 'app/shared/custom-directive/input.directive';
import { PhoneNumberService } from 'app/shared/services/phone-number.service';
import { NumberSchema } from 'app/models/phone-number.model';
import { NgSelectModule } from '@ng-select/ng-select';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'environments/environment';

@Component({
  selector: 'app-channel-tabs',
  standalone: true,
  imports: [FormsModule, NgClass, ContactListComponent, ReactiveFormsModule, InputDirective, NgSelectModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './channel-tabs.component.html',
  styleUrls: ['./channel-tabs.component.scss', './channel-tabs-mediaqueries.scss']
})
export class ChannelTabsComponent {

  currentIndex: number = 1;
  selectedChannelImageUrl!: string | null;
  isAddPhoneFieldVisiable: boolean = false;
  phoneNumberForm!: FormGroup;
  countryCode!: string
  isNumberValid: boolean | null = null;
  channelToggle: boolean = true
  selectedCountry!: any
  channelsItem: {
    id: number,
    icon: string,
    name: string,
    status: boolean
  }[] = [
      {
        id: 1,
        icon: '/assets/icons/whatsapp.svg',
        name: 'WhatsApp',
        status: true
      },
      {
        id: 2,
        icon: '/assets/icons/channel-chat.svg',
        name: 'Chats',
        status: true
      },
      {
        id: 3,
        icon: '/assets/icons/google.svg',
        name: 'Google',
        status: false
      },
      {
        id: 4,
        icon: '/assets/icons/messenger.svg',
        name: 'Messenger',
        status: true
      }
    ]

  countries = [
    { id: 1, dialCode: '+31', name: 'Netherlands', flag: '/assets/flags/NL.svg' },
    { id: 2, dialCode: '+49', name: 'Germany', flag: '/assets/flags/DE.svg' },
    { id: 3, dialCode: '+34', name: 'Spain', flag: '/assets/flags/ES.svg' },
    { id: 4, dialCode: '+33', name: 'France', flag: '/assets/flags/FR.svg' },
  ];




  constructor(public behaviorService: BehaviorService, private fb: FormBuilder, private validationService: PhoneNumberService, private toastr: ToastrService) {


  }

  ngOnInit() {


    this.phoneNumberForm = this.fb.group({
      accountSID: [''],
      authToken: [''],
      dialCode: [''],
      number: [],
      smsCheckbox: [false],
      whatsappCheckbox: [false],
      delayTime: [''],
      onlineMessage: [''],
      offlineMessage: ['']
    });
    this.phoneNumberForm.get('accountSID')?.setValue(environment.accountSID)
    this.phoneNumberForm.get('authToken')?.setValue(environment.authToken)
    this.selectedCountry = this.countries.find(country => country.name === 'Netherlands');
    this.phoneNumberForm.get('dialCode')?.setValue(this.selectedCountry.dialCode)
    this.behaviorService.imageUrl$.subscribe(url => {
      this.selectedChannelImageUrl = url
    })
  }


  handleTextareaInputOnline(event: Event) {
    const customEvent = event as CustomEvent<string>;
    this.phoneNumberForm.get('onlineMessage')?.setValue(customEvent.detail)
  }

  handleTextareaInputOffline(event: Event) {
    const customEvent = event as CustomEvent<string>;
    this.phoneNumberForm.get('offlineMessage')?.setValue(customEvent.detail)
  }

  handleChannelToggle(event: Event) {
    const customEvent = event as CustomEvent<boolean>;
    this.channelToggle = customEvent.detail
  }

  handleTabs(id: number, imgUrl: string) {
    this.currentIndex = id
    this.behaviorService.updateImageUrl(imgUrl)
  }

  addPhoneNumber() {
    this.isAddPhoneFieldVisiable = true
    this.behaviorService.isFormVisiable.next(this.isAddPhoneFieldVisiable)
  }

  checkValidity() {
    if (this.phoneNumberForm.get('number')?.valid) {
      this.validateNumber();
    }
  }

  validateNumber() {
    const number = this.phoneNumberForm.get('number')?.value;
    const dialcode = this.phoneNumberForm.get('dialCode')?.value;
    const withDialCode = dialcode + number
    if (number) {
      this.validationService.validateNumber(withDialCode).subscribe(
        response => {
          // Assuming the response has a valid field
          this.isNumberValid = response.valid;
          if (this.isNumberValid) {
            console.log('Number is valid:', number);
            const message = 'Number is vaild!!'
            this.toastr.success(message);
          } else {
            console.log('Number is invalid.');
            const message = 'Number is invaild!!'
            this.toastr.error(message);
          }
        },
        error => {
          console.error('Error validating number:', error);
          this.isNumberValid = false; // Set to false on error
        }
      );
    }
  }

  savePhnNumber() {

    const body: NumberSchema = {
      enabled: this.channelToggle,
      SID: this.phoneNumberForm.value.accountSID,
      authToken: this.phoneNumberForm.value.authToken,
      phoneNumbers: [
        {
          countryCode: this.phoneNumberForm.value.dialCode,
          phoneNumber: this.phoneNumberForm.value.number,
          whatsapp: this.phoneNumberForm.value.whatsappCheckbox,
          sms: this.phoneNumberForm.value.smsCheckbox,
          delay: this.phoneNumberForm.value.delayTime,
          onlineMessage: this.phoneNumberForm.value.onlineMessage,
          offlineMessage: this.phoneNumberForm.value.offlineMessage,
        }
      ]
    }

    this.phoneNumberForm.reset({
      dialCode: this.selectedCountry
    })

    this.behaviorService.updatePhoneData(body);
    const message = 'Data is saved successfully!!'
    this.toastr.success(message);
    console.log("phone number data:", body);

  }
}
