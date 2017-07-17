"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RadarChartDemoComponent = (function () {
    function RadarChartDemoComponent() {
        this.radarChartType = 'radar';
        this.radarChartLabels = ['Ensomhed/social angst', 'Rusmidler', 'Præstationsangst', 'Økonomi', 'Sunde fællesskaber', 'Sundhed', 'Sex'];
        // Initial data for static chart display  
        this.radarChartData = [{ data: [0, 0, 0, 0, 0, 0, 0] }];
        this.radarChartOptions = {
            legend: { display: false, fullWidth: false },
            responsive: true
        };
        this.radarChartColors = [
            {
                borderColor: 'rgba(255, 55, 255, 0)',
                backgroundColor: 'rgba(255, 255, 255, 0)'
            },
            {
                borderColor: 'rgba(54, 162, 235, 1)',
                backgroundColor: 'rgba(54, 162, 235, 0.2)'
            }
        ];
    }
    RadarChartDemoComponent.prototype.ngOnInit = function () {
        this.radarChartData.push({ data: this.dataChart });
    };
    // events
    RadarChartDemoComponent.prototype.chartClicked = function (e) {
        console.log(e);
    };
    RadarChartDemoComponent.prototype.chartHovered = function (e) {
        console.log(e);
    };
    return RadarChartDemoComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], RadarChartDemoComponent.prototype, "dataChart", void 0);
RadarChartDemoComponent = __decorate([
    core_1.Component({
        selector: 'radar-chart',
        templateUrl: './radar-chart.component.template.html'
    })
], RadarChartDemoComponent);
exports.RadarChartDemoComponent = RadarChartDemoComponent;
//# sourceMappingURL=radar-chart.component.js.map