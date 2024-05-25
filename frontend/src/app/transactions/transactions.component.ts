import { Component } from '@angular/core';
import { BudgetproxyService } from '../budgetproxy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.css'
})
export class TransactionsComponent {
  categories: any;
  
  constructor(private proxy$:BudgetproxyService, private router: Router){
    proxy$.getAllBudgets().subscribe((result:any) =>{
      console.log(result);
      this.categories = result;
    })
  }

  onBudgetButtonClick(){
    this.router.navigate(['/budget']);
  }
  
}
