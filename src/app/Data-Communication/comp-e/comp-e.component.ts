import { Component } from '@angular/core';
import { Data3Service } from '../data3.service';


@Component({
  selector: 'app-comp-e',
  templateUrl: './comp-e.component.html',
  styleUrls: ['./comp-e.component.css']
})
export class CompEComponent {
  public dataFromE: any;

  constructor(private dt: Data3Service) {
    this.receiveApiData()

  }

  receiveApiData() {
    this.dt.getapiData().subscribe({
      next: ((res: any) => {
        // console.log(res.data);
        this.dataFromE = res;
        console.log(this.dataFromE);

      }),
      complete: () => console.log("Data receive successfully")
    })
  }

  sendDataToD() {
    this.dt.setData(this.dataFromE);
  }


}
