import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetproxyService } from '../budgetproxy.service';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  formSubmitted= false;
  constructor(private proxy$:BudgetproxyService){}
  createForm = new FormGroup({
    categoryId : new FormControl('',[
      Validators.required
    ]),
    userId: new FormControl('663f2e142158b3404246b799'),
    amount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    date : new FormControl('',[
      Validators.required
    ]),
    note : new FormControl(''),
    budgetType : new FormControl('',[
      Validators.required
    ])
  });
  title = 'SmartSpend';

  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      // console.log(this.createForm.value);
      this.proxy$.createExpense(this.createForm.value).subscribe((result : any) => {
        console.log(result);
      })
    }
  }

}
