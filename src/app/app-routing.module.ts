import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SolutionComponent } from './solution/solution.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { EmpComponent } from './emp/emp.component';
import { ParentComponent } from './Data-Communication/parent/parent.component';
import { CompAComponent } from './Data-Communication/comp-a/comp-a.component';
import { CompBComponent } from './Data-Communication/comp-b/comp-b.component';
import { CompCComponent } from './Data-Communication/comp-c/comp-c.component';
import { CompDComponent } from './Data-Communication/comp-d/comp-d.component';
import { PrimengComponent } from './thirdpartylibrary/primeng/primeng.component';
import { CompEComponent } from './Data-Communication/comp-e/comp-e.component';
import { Child1Component } from './Data Communication-2/child1/child1.component';
import { Parent1Component } from './Data Communication-2/parent1/parent1.component';



const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "About Us", component: AboutUsComponent, canActivate: ['AuthGaurd'] },
  { path: "Contact Us", component: ContactUsComponent, pathMatch: 'full' },
  { path: "Solution", component: SolutionComponent, pathMatch: 'prefix' },
  { path: "emp/:id/:name", component: EmpComponent },
  { path: "Parent", component: ParentComponent },
  { path: "compA", component: CompAComponent },
  { path: "compB", component: CompBComponent },
  { path: "compc", component: CompCComponent },
  { path: "compd", component: CompDComponent },
  { path: "compe", component: CompEComponent },
  { path: "parent1", component: Parent1Component },
  { path: "child1", component: Child1Component },

  {
    path: 'corebanking',
    loadChildren: () => import('./lazyloading/core-banking/core-banking.module').then(mod => mod.CoreBankingModule)
  },
  {
    path: 'loan',
    loadChildren: () => import('./lazyloading/loan/loan.module').then(mod => mod.LoanModule)
  },

  { path: 'primeng', component: PrimengComponent },
  { path: "**", redirectTo: "" }// navigate to home component




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
