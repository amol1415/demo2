import { Component } from '@angular/core';

@Component({
  selector: 'app-outer-child',
  templateUrl: './outer-child.component.html',
  styleUrls: ['./outer-child.component.css']
})
export class OuterChildComponent {
  public dataFromOuterChild: any = "Data From Outer Child";

  public dataFromOuterChild2: any = "Hare Krishna Hari Boll!!!"

  sendDataFromOuterChild() {
    return "Test Data From Outer Child";
  }

  sendDataFromOuterChild2() {
    return this.dataFromOuterChild2;
  }
}

