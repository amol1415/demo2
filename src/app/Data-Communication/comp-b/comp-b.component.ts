import { Component } from '@angular/core';
import { DataService } from '../Service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-b',
  templateUrl: './comp-b.component.html',
  styleUrls: ['./comp-b.component.css']
})
export class CompBComponent {
  public receivedDataFromA: any;
  public dataFromB: any = " Hare Ram!!!!";
  constructor(private dt: DataService, private route: Router) {


    this.dt.currentMessage.subscribe({
      next: ((res: any) => console.log(res)),
      error: ((err: any) => console.log(err))
    })



    this.dt.getData().subscribe({
      next: ((res: any) => {
        console.log(res);
        this.receivedDataFromA = res;
      }),

      error: ((err: any) => console.log(err))
    })

  }
  sendDataToA() {
    this.dt.setData(this.dataFromB);
    this.route.navigate(['compA'])
  }



}
