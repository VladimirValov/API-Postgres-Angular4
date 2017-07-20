import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'radar-chart',
  templateUrl: './radar-chart.component.html'
})
export class RadarChartDemoComponent implements OnInit {
  @Input() dataChart: any;

  radarChartType:string = 'radar'; 

  radarChartLabels:string[] = ['Ensomhed/social angst', 'Rusmidler', 'Præstationsangst', 'Økonomi', 'Sunde fællesskaber', 'Sundhed', 'Sex'];
  
  // Initial data for static chart display  
  radarChartData:any = [{ data: [0, 0, 0, 0, 0, 0, 10] }]; 
  
  ngOnInit(): void {
    this.radarChartData.push( {data: this.dataChart} );
  }

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