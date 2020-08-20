import { Injectable } from '@angular/core';
import { Observable } from  'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';


import { SendEmail } from './send-email';


@Injectable({
  providedIn: 'root'
})
export class SendEmailService { 
  PHP_API_SERVER = "http://127.0.0.1/iaestegh/api";

  constructor(private http: HttpClient) { }

  sendEmail(sendEmail: SendEmail): Observable<SendEmail>{
    return this.http.post<SendEmail>(`${this.PHP_API_SERVER}/index.php`, sendEmail);
  }

}
