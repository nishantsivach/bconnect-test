import { NgClass } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListSchema, NumberSchema } from 'app/models/phone-number.model';
import { BehaviorService } from 'app/shared/services/behavior.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [NgClass],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss'
})
export class ContactListComponent {
  phoneNumberList: ListSchema[] = []
  updatedList: ListSchema[] = []
  isFormVisible!: boolean
  countries = [
    { id: 1, dialCode: '+31', name: 'Netherlands', flag: '/assets/flags/NL.svg' },
    { id: 2, dialCode: '+49', name: 'Germany', flag: '/assets/flags/DE.svg' },
    { id: 3, dialCode: '+34', name: 'Spain', flag: '/assets/flags/ES.svg' },
    { id: 4, dialCode: '+33', name: 'France', flag: '/assets/flags/FR.svg' },
  ];

  constructor(private behaviorService: BehaviorService) {

  }

  ngOnInit() {
    //  Fetch initial phone numbers from local storage
    const storedPhoneNumbers = JSON.parse(localStorage.getItem('phoneNumbers') || '[]') as ListSchema[];

    this.phoneNumberList = storedPhoneNumbers;

    // Subscribe to BehaviorService for phone number data
    this.behaviorService.phoneNumberData$.subscribe((data) => {
      if (data && data.phoneNumbers) {
        // Map the phone numbers from the BehaviorSubject and add the flag key
        const newPhoneNumbers = (data as NumberSchema).phoneNumbers.map(phone => {
          const country = this.countries.find(c => c.dialCode === phone.countryCode);
          return {
            ...phone,
            flag: country ? country.flag : ''
          };
        });

        // Combine stored phone numbers with the new ones
        const updatedPhoneNumbers = [...this.phoneNumberList, ...newPhoneNumbers];

        // Update local storage with the new combined list
        localStorage.setItem('phoneNumbers', JSON.stringify(updatedPhoneNumbers));


        this.phoneNumberList = updatedPhoneNumbers;

      }
    });

    //Subscribe to isFormVisible to control form visibility
    this.behaviorService.isFormVisiable.subscribe(value => {
      this.isFormVisible = value;
    });
  }



  handleSwitch(index: number) {
    console.log("check the switch index", index)
  }
}
