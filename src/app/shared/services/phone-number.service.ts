import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService {

  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  validateNumber(number: string): Observable<any> {
    const url = `${this.apiUrl}?api_key=${this.apiKey}&phone=${number}`;
    return this.http.get<any>(url);
  }
}
