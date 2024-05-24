import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-welcomepage',
  templateUrl: './welcomepage.component.html',
  styleUrl: './welcomepage.component.css'
})
export class WelcomepageComponent {
  isLoggedIn= true;
  constructor(private router: Router){

  }
  onBudgetButtonClick(){
    this.router.navigate(['/budget']);
  }
  onTransactionButtonClick(){
    this.router.navigate(['/transactions']);
  }
  onReportButtonClick(){
    this.router.navigate(['/report']);
  }
}
