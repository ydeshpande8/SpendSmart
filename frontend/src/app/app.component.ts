import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  showExpenseForm: boolean = true;
  showIncomeForm: boolean = false;
  expenseFormSubmitted = false;
  incomeFormSubmitted = false;
  createExpenseForm = new FormGroup({
    date : new FormControl('',[
      Validators.required
    ]),
    expenseNote : new FormControl(''),
    expenseAmount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    category : new FormControl('',[
      Validators.required
    ]),
    budgetType : new FormControl('expense')
  });
  createIncomeForm = new FormGroup({
    date : new FormControl('',[
      Validators.required
    ]),
    incomeNote : new FormControl(''),
    incomeAmount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    category : new FormControl('',[
      Validators.required
    ]),
    budgetType : new FormControl('income')
  });
  title = 'SmartSpend';

  onExpenseFormSubmit(){
    this.expenseFormSubmitted = true;
    if(this.createExpenseForm.valid){
      console.log(this.createExpenseForm.value);

      // this.proxy$.createExpense(this.createExpenseForm.value).subscribe((result : any) => {
      //   console.log(result);
      // })
    }
  }
  onIncomeFormSubmit(){
    this.incomeFormSubmitted = true;
    if(this.createIncomeForm.valid){
      console.log(this.createIncomeForm.value);

      // this.proxy$.createExpense(this.createExpenseForm.value).subscribe((result : any) => {
      //   console.log(result);
      // })
    }
  }

  onExpenseButtonClickEvent(){
    this.showExpenseForm = true;
    this.showIncomeForm = false;
  }

  onIncomeButtonClickEvent(){
    this.showExpenseForm = false;
    this.showIncomeForm = true;
  }
}
