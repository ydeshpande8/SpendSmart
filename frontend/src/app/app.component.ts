import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isLoggedIn= true;   //check for session, if session has 'user' then true else false
  // condition ? true : false 

  
}
