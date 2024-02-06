import { NgModule, createComponent } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorebankingComponent } from './corebanking/corebanking.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { DebitCardComponent } from './debit-card/debit-card.component';
import { SavingAccountComponent } from './saving-account/saving-account.component';
import { RouterModule, Routes } from '@angular/router';
const route: Routes = [
  { path: '', component: CorebankingComponent },
  { path: 'credit', component: CreditCardComponent },
  { path: 'debit', component: DebitCardComponent },
  { path: 'saving', component: SavingAccountComponent },


]


@NgModule({
  declarations: [
    CorebankingComponent,
    CreditCardComponent,
    DebitCardComponent,
    SavingAccountComponent
  ],
  imports: [
    CommonModule,
    [RouterModule.forChild(route)]
  ]
})
export class CoreBankingModule { }
