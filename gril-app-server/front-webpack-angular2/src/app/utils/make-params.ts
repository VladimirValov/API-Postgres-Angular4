import { Injectable } from '@angular/core';

@Injectable()

export class MakeParams {
    
    calcSummary( data:any ) :number[] {
        let arr:number[] = [];


        arr[0] =  data.feel * 0.6      + data.relation * 0.4;
        arr[1] =  data.economy * 1;
        arr[2] =  data.society * 0.4   + data.lonely * 0.6;
        arr[3] =  data.community * 0.7 + data.contribute * 0.3;
        arr[4] =  data.drink * 0.3     + data.hash * 0.7;        
        arr[5] =  data.smoke * 0.7     + data.snus * 0.3;
        arr[6] =  data.sex * 0.5       + data.deny * 0.5;

        // arr[2] =  data.feel * 0.6      + data.relation * 0.4;
        // arr[3] =  data.economy * 1;
        // arr[0] =  data.society * 0.4   + data.lonely * 0.6;
        // arr[4] =  data.community * 0.7 + data.contribute * 0.3;
        // arr[1] =  data.drink * 0.3     + data.hash * 0.7;        
        // arr[5] =  data.smoke * 0.7     + data.snus * 0.3;
        // arr[6] =  data.sex * 0.5       + data.deny * 0.5;
        
        
        // arr[0] =  data.society * 0.4   + data.lonely * 0.6;
        // arr[1] =  data.drink * 0.3     + data.hash * 0.7;
        // arr[2] =  data.feel * 0.6      + data.relation * 0.4;
        // arr[3] =  data.economy * 1;
        // arr[4] =  data.community * 0.7 + data.contribute * 0.3;
        // arr[5] =  data.smoke * 0.7     + data.snus * 0.3;
        // arr[6] =  data.sex * 0.5       + data.deny * 0.5;

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
                // <td>{{answer.feel}}</td>     
                // <td>{{answer.relation}}</td>   
                
                // <td>{{answer.economy}}</td> 

                // <td>{{answer.society}}</td>   
                // <td>{{answer.lonely}}</td>  
         
                // <td>{{answer.community}}</td>
                // <td>{{answer.contribute}}</td>    

                // <td>{{answer.drink}}</td>     
                // <td>{{answer.hash}}</td>  

                // <td>{{answer.smoke}}</td>
                // <td>{{answer.snus}}</td>

                // <td>{{answer.sex}}</td>     
                // <td>{{answer.deny}}</td>   


