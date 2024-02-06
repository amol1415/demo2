import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public navigationFlag: boolean = false;
  constructor(private route: Router) {
    this.navigationFlag = true;

  }
  onAboutUsClick() {
    if (this.navigationFlag) {
      //bussiness logic
      this.route.navigateByUrl('About Us')
    }

  }

  onContactUsClick() {
    if (this.navigationFlag) {
      //bussiness logic
      this.route.navigate(['Contact Us'])
    }
  }
  onEmpClick() {
    this.route.navigate(['emp/12/Gourang'])
  }

}
