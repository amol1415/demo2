import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Data2Service {

  // public message: any = new BehaviorSubject("Default Message");
  // currentMessage = this.message.asObservable();

  constructor(private http: HttpClient) { }

  // getData() {
  //   return this.currentMessage;
  // }

  // setData(dt: any) {
  //   this.message.next(dt);
  // }
  public message = new BehaviorSubject("Default Message");
  currentMessage = this.message.asObservable();

  getData() {
    return this.currentMessage;
  }

  setData(data: any) {
    this.message.next(data);
  }

  getApiData() {
    this.http.get('https://fakestoreapi.com/products')
  }
}
