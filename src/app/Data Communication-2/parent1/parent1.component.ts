import { Component } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {
  public dataFromParent: any = "Jai Shri Ram";
  public dataFromChild: any;


  fetchDataFromChild(data: any) {
    console.log(data);
    this.dataFromChild = data;

  }
}
