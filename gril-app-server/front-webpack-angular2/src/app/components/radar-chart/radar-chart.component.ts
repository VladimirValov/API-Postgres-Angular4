import { Component, Input } from '@angular/core';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html'
})

export class RadarChartComponent  {
  @Input() dataChart: any;
  @Input() dataSelected: any;
  @Input() radarChartData:any; 

  radarChartType:string = 'radar'; 

  radarChartLabels:string[] = ['Præstationsangst',  'Økonomi', 'Ensomhed/social angst', 'Sunde fællesskaber', 'Rusmidler', 'Sundhed', 'Sex'];
  
  public radarChartOptions:any = {
    legend: { display: false, fullWidth: false },
    responsive: true
  };

  public radarChartColors:any[] = [
    {
      borderColor: 'rgba(255, 55, 255, 0)',
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    {
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)'
    },
    {
      borderColor: 'rgba(252, 137, 18, 1)',
      backgroundColor: 'rgba(252, 137, 18, 0.2)'
    }
  ];

  // events
  chartClicked(e:any):void {
    console.log(e);
  }
 
  chartHovered(e:any):void {
    console.log(e);
  }
}