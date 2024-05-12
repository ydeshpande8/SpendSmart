import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetproxyService } from '../budgetproxy.service';


@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  formSubmitted= false;
  reportShow = false;
  reportInfo:any;
  constructor(private proxy$:BudgetproxyService){}
  createForm = new FormGroup({
    month : new FormControl('',[
      Validators.required
    ]),
    year: new FormControl('',[
      Validators.required
    ]),
  });
  onSubmit(){
    this.formSubmitted = true;
    if(this.createForm.valid){
      //console.log(this.createForm.value);
      this.proxy$.getReports(this.createForm.value).subscribe((result : any) => {
        console.log(result);
        this.reportInfo = result;
        this.reportShow = true;
      })
    }
  }
}
