import { Component } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  categories: any = [
    {date:'5/09/2024', type: 'Income', amount: 6000, note:'Salary' },
    {date:'5/10/2024', type: 'Income', amount: 2000, note:'Savings' },
    {date:'5/10/2024', type: 'Expense', amount: 100, note:'Restaurant' },
    {date:'5/11/2024', type: 'Expense', amount: 3000, note:'Rent'},
  ];

  singleCategory: any = {date:'5/09/2024', type: 'Income', amount: 6000, note:'Salary' };

}
