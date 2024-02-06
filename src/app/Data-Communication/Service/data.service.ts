import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public message: any = new BehaviorSubject("Default Message");
  currentMessage = this.message.asObservable();
  // i create one obj of behavior sub and kept into message variable.
  // in behavour sub any value u can write,
  // in message data we need to subscribe data for that we have asObsarvable() method is there.


  constructor(private http: HttpClient) {

  }

  getData() { // get means receive/accept data.
    return this.currentMessage;
  }

  setData(dt: any) { // set means send data 
    this.message.next(dt);
    // in set method coming data save to the message and message refer to the currentMessage( mhnje alyala data pass karte currentMessage la.)
    // tyamule data get pn karu shakto ani set pn karu shakto.
  }



  // for api service data
  // getApiData() {
  //   this.http.get('https://fakestoreapi.com/products')
  // }
}
