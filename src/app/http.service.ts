import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class HttpService { 

  constructor(private http: HttpClient) { }
  test = "How r u?";

  sendEmail(user):Observable<any>{
    return this.http.post<any>('http://localhost:8080/iaestebackend/angular.php', user);
  }
  

}