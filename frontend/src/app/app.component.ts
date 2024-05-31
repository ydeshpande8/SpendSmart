import { Component } from '@angular/core';
import { BudgetproxyService } from './budgetproxy.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  isNotLoggedIn = true;
  user : any;
  constructor(private proxy$: BudgetproxyService, private router: Router)
  {
    proxy$.getcurrentUser().subscribe((user : any) => {
      this.user = user
      if(user.displayName){
        this.isNotLoggedIn = false
      }
    })

  }
  onLoginButtonClick(){
    // this.proxy$.login().subscribe((user : any) => {
    //   this.router.navigate(['/']);
    {window.location.href='/auth/google'}
    }
  }

