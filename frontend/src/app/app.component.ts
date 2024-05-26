import { Component } from '@angular/core';
import { BudgetproxyService } from './budgetproxy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user : any;
  constructor(private proxy$: BudgetproxyService)
{
  proxy$.getcurrentUser().subscribe((user : any) => {
    this.user = user;
  })
}}
