import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gril-app',
  templateUrl:'./app.component.html',
})
export class AppComponent implements OnInit { 
  name = 'Gril App'; 

  count = 152;

  data = { 
   society: 2,
   lonely: 2,

   drink: 3,
   hash: 3,

   feel: 4,
   relation: 4,

   economy: 5,

   community: 6,
   contribute: 6,

   smoke: 7,
   snus: 7,

   sex: 8,
   deny: 8
  };

  summary: Array<number> = [];

  calcTotal( data:any ): Array<number> {
    let arr = [];
    
    arr[0] =  (data.society + data.lonely) / 2;
    arr[1] =  (data.drink + data.hash) / 2;
    arr[2] =  (data.feel + data.relation) / 2;
    arr[3] =  data.economy;
    arr[4] =  (data.community + data.contribute) / 2;
    arr[5] =  (data.smoke + data.snus) / 2;
    arr[6] =  (data.sex + data.deny) / 2;

    return arr; 
  }

  ngOnInit():void {
    this.summary =  this.calcTotal(this.data);
  }
}





