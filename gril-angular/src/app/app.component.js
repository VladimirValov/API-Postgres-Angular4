"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Gril App';
        this.count = 152;
        this.data = {
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
        this.summary = [];
    }
    AppComponent.prototype.calcTotal = function (data) {
        var arr = [];
        arr[0] = (data.society + data.lonely) / 2;
        arr[1] = (data.drink + data.hash) / 2;
        arr[2] = (data.feel + data.relation) / 2;
        arr[3] = data.economy;
        arr[4] = (data.community + data.contribute) / 2;
        arr[5] = (data.smoke + data.snus) / 2;
        arr[6] = (data.sex + data.deny) / 2;
        return arr;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.summary = this.calcTotal(this.data);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'gril-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map