import { Injectable } from '@angular/core';

@Injectable()

export class MakeParamsService {
    
    calcSummary( data:any ) :number[] {
        let arr:number[] = [];
        
        arr[0] =  data.society * 0.4   + data.lonely * 0.6;
        arr[1] =  data.drink * 0.3     + data.hash * 0.7;
        arr[2] =  data.feel * 0.6      + data.relation * 0.4;
        arr[3] =  data.economy * 1;
        arr[4] =  data.community * 0.7 + data.contribute * 0.3;
        arr[5] =  data.smoke * 0.7     + data.snus * 0.3;
        arr[6] =  data.sex * 0.5       + data.deny * 0.5;

        return arr.map(el => Math.round(el * 10) / 10 ); 
    }

    dataChart( data1: number[], data2?: number[]  ) :any {
        return  [
            { data: [10, 0, 0, 0, 0, 0, 0] }, //layout
            { data: data1 },
            { data: data2 }
        ]   
    }
}


