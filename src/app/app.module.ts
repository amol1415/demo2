import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmpComponent } from './emp/emp.component';
import { HttpClientModule } from '@angular/common/http';
import { ParentComponent } from './Data-Communication/parent/parent.component';
import { OuterChildComponent } from './Data-Communication/outer-child/outer-child.component';
import { InnerChildComponent } from './Data-Communication/parent/inner-child/inner-child.component';
import { CompAComponent } from './Data-Communication/comp-a/comp-a.component';
import { CompBComponent } from './Data-Communication/comp-b/comp-b.component';
import { CompCComponent } from './Data-Communication/comp-c/comp-c.component';
import { CompDComponent } from './Data-Communication/comp-d/comp-d.component';
import { PrimengComponent } from './thirdpartylibrary/primeng/primeng.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CompEComponent } from './Data-Communication/comp-e/comp-e.component';
import { Parent1Component } from './Data Communication-2/parent1/parent1.component';
import { Child1Component } from './Data Communication-2/child1/child1.component';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,

    ContactUsComponent,
    SolutionComponent,
    AboutUsComponent,
    EmpComponent,
    ParentComponent,
    OuterChildComponent,
    InnerChildComponent,
    CompAComponent,
    CompBComponent,
    CompCComponent,
    CompDComponent,
    PrimengComponent,
    CompEComponent,
    Parent1Component,
    Child1Component,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    FormsModule,
    HttpClientModule,
    CalendarModule,
    ButtonModule,
    CardModule,
    AccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
