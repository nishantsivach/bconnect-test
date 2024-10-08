import { Injectable } from '@angular/core';
import { NumberSchema } from 'app/models/phone-number.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BehaviorService {

  private imageUrlSubject = new BehaviorSubject<string | null>(null);
  public imageUrl$ = this.imageUrlSubject.asObservable();
  private phoneNumberSubject = new BehaviorSubject<NumberSchema | null>(null);
  public phoneNumberData$ = this.phoneNumberSubject.asObservable()
  public isFormVisiable = new BehaviorSubject<boolean>(false)

  constructor() { }

  // Method to update the channel image URL
  updateImageUrl(newUrl: string) {
    this.imageUrlSubject.next(newUrl);
  }

  // Method to get the select channel value of the image URL
  getImageUrl(): string | null {
    return this.imageUrlSubject.value;
  }

  //Method to get the phone data 

  updatePhoneData(data: NumberSchema) {
    this.phoneNumberSubject.next(data)
  }

  getPhoneNumberData(): NumberSchema | null {
    return this.phoneNumberSubject.value
  }

}
