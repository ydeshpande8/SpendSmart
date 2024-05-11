import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'', component:HomepageComponent},
  {path:'transactions', component:TransactionsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
