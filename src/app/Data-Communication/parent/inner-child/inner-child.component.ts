import { Component, EventEmitter, Input, Output, } from '@angular/core';

@Component({
  selector: 'app-inner-child',
  templateUrl: './inner-child.component.html',
  styleUrls: ['./inner-child.component.css']
})
export class InnerChildComponent {
  public childData: any = "Jai Shri Ram!"
  public parentData1: any;
  public parentData3: any;

  @Input() parentData: any;
  @Input() parentData2: any;

  @Output() childData1 = new EventEmitter();

  constructor() {
    console.log(this.parentData);
    console.log(this.parentData2);
  }
  ngOnInit() {
    console.log(this.parentData);
    this.parentData1 = this.parentData;
    console.log(this.parentData2);
    this.parentData3 = this.parentData2;

  }
  sendDataToParent() {
    this.childData1.emit(this.childData)
  }



}
