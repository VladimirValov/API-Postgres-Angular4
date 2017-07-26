import { Component, OnInit } from '@angular/core';

import { Schedule } from '../../data-class/schedule';
import { ControlDbService } from '../../services/control-db.service';

@Component({
    selector: 'control-db',
    templateUrl: './control-db.component.html',
    styleUrls: ['./control-db.component.css'],
    providers: [ControlDbService]
})

export class ControlDbComponent implements OnInit {
   
    statusDb: boolean = false;
    rules: Schedule[];  
    calendar: Date[]; 

    constructor (private controlDbService: ControlDbService) {}

    getSchedulefromDb(): void {
        this.controlDbService.getSchedule().then(rules => {
            this.rules = buildCalendar(10, rules);
        } )
    }

    formatDate(date: Date) {
        return new Date(date).toLocaleString('ru', {year: 'numeric', day:"2-digit", month:'2-digit'})
    }   

     ngOnInit(): void {
        this.getSchedulefromDb(); 

    }

}

function buildCalendar (days:number, rules: Schedule[]) :any {
    const calendar = getCalendar(days);

    return  calendar.map((date: Date) => {
                let access = false;

                rules.forEach((rule: Schedule) => {
                    if ( (date > new Date(rule.date1)) && (date < new Date(rule.date2)) )  access = true;
                });
                return {date, access}
            });
}

 function getCalendar(days: number):Date[] {
        const arr:Date[] = [];
        let cur = new Date();

        for (let i = 0; i < days; i++ ) { 
            arr.push(new Date(cur.setDate(cur.getDate() + 1)));
        }
        return arr;
    }