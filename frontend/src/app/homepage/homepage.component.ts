import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  formSubmitted= false;
  createForm = new FormGroup({
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
    budgetType : new FormControl('',[
      Validators.required
    ])
  });
  title = 'SmartSpend';

  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      console.log(this.createForm.value);

      // this.proxy$.createExpense(this.createExpenseForm.value).subscribe((result : any) => {
      //   console.log(result);
      // })
    }
  }

}
