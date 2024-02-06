import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarLoanComponent } from './car-loan/car-loan.component';
import { HomeLoanComponent } from './home-loan/home-loan.component';
import { PersonalLoanComponent } from './personal-loan/personal-loan.component';
import { LoanComponent } from './loan/loan.component';
import { RouterModule, Routes } from '@angular/router';


const route: Routes = [
  { path: '', component: LoanComponent },
  { path: 'home', component: HomeLoanComponent },
  { path: 'car', component: CarLoanComponent },
  { path: 'personal', component: PersonalLoanComponent }
]



@NgModule({
  declarations: [
    CarLoanComponent,
    HomeLoanComponent,
    PersonalLoanComponent,
    LoanComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class LoanModule { }
