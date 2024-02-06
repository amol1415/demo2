import { Component, ViewChild } from '@angular/core';
import { OuterChildComponent } from '../outer-child/outer-child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public childData: any;
  public outerChild1: any;
  public outerChi: any;


  public dataFromParent: any = "Data From Parent Component";
  public data2FromParent: any = "Data 2 From Parent Component";


  // outer child
  @ViewChild(OuterChildComponent) outerChild: any;
  @ViewChild(OuterChildComponent) outerChild2: any;

  fetchDataFromChild(data: any) {
    console.log(data);
    this.childData = data;


  }

  // constructor() {
  //   console.log(this.outerChild);

  // }

  ngAfterViewInit() {
    console.log(this.outerChild);
    console.log(this.outerChild.dataFromOuterChild);
    this.outerChild1 = this.outerChild.dataFromOuterChild;
    //second data
    console.log(this.outerChild2.dataFromOuterChild2);
    // console.log(this.outerChild2.sendDataFromOuterChild2());
    this.outerChi = this.outerChild2.dataFromOuterChild2;




  }
}
