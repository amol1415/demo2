import { Component } from '@angular/core';
import { Data2Service } from '../data2.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp-c',
  templateUrl: './comp-c.component.html',
  styleUrls: ['./comp-c.component.css']
})
export class CompCComponent {
  public dataFromD: any;
  public dataFromC = {
    name: 'compC',
    age: 20,
    mark: [23, 45, 76, 80, 50]
  }
  constructor(private de: Data2Service, private route: Router) {
    this.de.currentMessage.subscribe({
      next: ((res: any) => {
        console.log(res);
      }),
      error: ((err: any) => {
        console.log(err);
      })
    })

    this.de.getData().subscribe({
      next: ((res: any) => {
        // console.log(res);
        this.dataFromD = res;
        console.log(this.dataFromD);
      }),
      error: ((err: any) => {
        console.log(err);

      })
    })


  }

  sendDataToD() {
    this.de.setData(this.dataFromC);
    this.route.navigate(['compd'])
  }

  // receiveApiData() {
  //   this.de.getApiData().subscribe({
  //     next: ((res: any) => {
  //       console.log(res);

  //     }),
  //     error: ((err: any) => console.log(err))

  //   })
  // }

}
