import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-a',
  templateUrl: './comp-a.component.html',
  styleUrls: ['./comp-a.component.css']
})
export class CompAComponent {

  public dataFromA: any = "Hare Krishna!!!!";
  public receivedDataFromB: any;

  constructor(private dt: DataService, private route: Router) {
    // this.dt.currentMessage;
    // console.log(this.dt.currentMessage);// data comes as an observable.
    this.dt.currentMessage.subscribe({
      next: ((res: any) => console.log(res)),
      error: ((err: any) => console.log(err))

    })



    this.dt.getData().subscribe({
      next: ((res: any) => {
        console.log(res);
        this.receivedDataFromB = res;
      }),
      error: ((err: any) => console.log(err))

    })
  }

  sendDataToB() {
    this.dt.setData(this.dataFromA);
    this.route.navigate(['compB'])
  }


  // for api data




}
