import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  public dataFromChild1: any = "Jai Shri Ram!!!!!";
  public dataFromChild: any;

  @Input() parent1: any;
  @Output() childData1 = new EventEmitter();

  constructor() {
    console.log(this.parent1);
    this.dataFromChild = this.parent1;
    console.log(this.dataFromChild);
  }

  ngOnInit() {
    this.dataFromChild = this.parent1;
    console.log(this.dataFromChild);

  }

  sendDataTOParent() {
    this.childData1.emit(this.dataFromChild1);


  }


}
