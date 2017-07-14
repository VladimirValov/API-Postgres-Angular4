import { Component } from '@angular/core';

@Component({
  selector: 'gril-app',
  templateUrl:'./app.component.html',
})
export class AppComponent  { 
  name = 'Gril App'; 
  
  data = { 
   society: 7,
   lonely: 3,

   drink: 6,
   hash: 2,

   feel: 5,
   relation: 10,

   economy: 6,

   community: 8,
   contribute: 8,

   smoke: 3,
   snus: 5,

   sex: 9,
   deny: 7
};

count = 152;

}
//Общий бал получается как среднее арифметическое?
