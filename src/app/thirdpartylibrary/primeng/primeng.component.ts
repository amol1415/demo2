import { Component } from '@angular/core';



@Component({
  selector: 'app-primeng',
  templateUrl: './primeng.component.html',
  styleUrls: ['./primeng.component.css']
})


export class PrimengComponent {


  value: any = Date;
  public selectedValues: any = ['val1', 'val2'];
  // public: date: any = Date;



}
