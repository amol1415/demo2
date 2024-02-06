import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Data3Service {

  constructor(private http: HttpClient) {

  }

  public message = new BehaviorSubject("Default Message");
  currentMessage = this.message.asObservable();

  getData() {
    return this.currentMessage;
  }

  setData(data: any) {
    this.message.next(data);
  }

  getapiData() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
}
