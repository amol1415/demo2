import { Component } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-d',
  templateUrl: './comp-d.component.html',
  styleUrls: ['./comp-d.component.css']
})
export class CompDComponent {
  public dataFromC: any;
  public apidataFromE: any;
  public dataFromD = {
    name: 'compD',
    age: 30,
    mark: [20, 40, 55, 32, 67, 87]
  }
  constructor(private de: Data2Service, private route: Router) {
    this.de.currentMessage.subscribe({
      next: ((res: any) => {
        console.log(res);
        this.dataFromC = res;
        console.log(this.dataFromC);
      }),
      error: ((err: any) => {
        console.log(err);
      })
    })



    this.de.getData().subscribe({
      next: ((res: any) => {
        console.log(res);
        this.apidataFromE = res;

      }),
      error: ((err: any) => {
        console.log(err);
      })
    })
  }



  sendDataToC() {
    this.de.setData(this.dataFromD);
    this.route.navigate(['compc']);
  }


}
