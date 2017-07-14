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
        this.data = {
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
        this.count = 152;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'gril-app',
        templateUrl: './app.component.html',
    })
], AppComponent);
exports.AppComponent = AppComponent;
//Общий бал получается как среднее арифметическое?
//# sourceMappingURL=app.component.js.map