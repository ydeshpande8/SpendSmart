import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class BudgetproxyService {

  hostUrl: string = "http://localhost:8080";

  constructor(private httpClient: HttpClient) { }

  createExpense(expense : Object){
    return this.httpClient.post(this.hostUrl + '/app/budget/', expense)
  }
}
