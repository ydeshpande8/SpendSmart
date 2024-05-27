import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetproxyService } from '../budgetproxy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
  categories :any;
  user:any;
  
  formSubmitted= false;
  constructor(private proxy$:BudgetproxyService, private router: Router){
    proxy$.getAllCategories().subscribe((result: any) => {this.categories = result;
      console.log(result);
    })
    proxy$.getcurrentUser().subscribe((user : any) => {
      this.user = user._id;
    })
    
  }
  createForm = new FormGroup({
    categoryId : new FormControl('',[
      Validators.required
    ]),
    // userId: new FormControl(this.user),
    amount : new FormControl('',[
      Validators.required,
      Validators.pattern("^[0-9]*$")
    ]),
    date : new FormControl('',[
      Validators.required
    ]),
    note : new FormControl(''),
    type : new FormControl('',[
      Validators.required
    ])
  });
  title = 'SmartSpend';

  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      const body = {
        categoryId : this.createForm.value.categoryId,
        date : this.createForm.value.date,
        note : this.createForm.value.note,
        amount : this.createForm.value.amount, 
        type : this.createForm.value.type,
        userId : this.user

      }
      this.proxy$.createBudget(body).subscribe((result : any) => {
        console.log(result)
        if(result){
          this.router.navigate(['/transactions',result._id]);
        }
      })
    
    }
  }

}
