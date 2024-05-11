import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { TransactionsComponent } from './transactions/transactions.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
    NgIf,
    NgFor
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
