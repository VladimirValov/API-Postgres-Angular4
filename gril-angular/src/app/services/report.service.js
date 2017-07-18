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
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var mock_report_1 = require("./mock-report");
var ReportService = (function () {
    function ReportService(http) {
        this.http = http;
        this.reportUrl = 'http://localhost:5000/reports';
    }
    ReportService.prototype.getReport = function () {
        return Promise.resolve(mock_report_1.DATA);
        // return this.http.get(this.reportUrl)
        //     .toPromise()
        //     .then((response) => {
        //         console.log(response);
        //         return response;
        //     })
    };
    return ReportService;
}());
ReportService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ReportService);
exports.ReportService = ReportService;
//# sourceMappingURL=report.service.js.map