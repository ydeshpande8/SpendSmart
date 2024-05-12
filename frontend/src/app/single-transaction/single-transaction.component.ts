import { Component } from '@angular/core';
import { BudgetproxyService } from '../budgetproxy.service';


@Component({
  selector: 'app-single-transaction',
  templateUrl: './single-transaction.component.html',
  styleUrl: './single-transaction.component.css'
})
export class SingleTransactionComponent {
  budgetId : any;
  singleCategory: any;
  constructor(private proxy$:BudgetproxyService){
    this.proxy$.getSingleBudget(this.budgetId).subscribe((result:any) =>{
      this.singleCategory = result;
    })
  }
  

}
