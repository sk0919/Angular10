"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.HeaderComponent = void 0;
var core_1 = require("@angular/core");
//parent to child data transfer and this is the child comp
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.flagShowLogoutButton = false;
        this.check = false;
        this.showClaimOption = false;
        this.updateLoginFlag = new core_3.EventEmitter(); //from child to parent
        //console.log("header -this is flagShowLogoutButton "+this.flagShowLogoutButton)
        console.log("-------------this is constructor-----------------------");
    }
    HeaderComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem("access") != null || sessionStorage.getItem("access") != undefined) {
            // this.showClaimOption = true;   
        }
        console.log("------------this is init------------------------");
        //this.updateLoginFlag.emit(this.flagForLogin)
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.check = !this.check;
    };
    HeaderComponent.prototype.unloadLoginComp = function () {
        this.flagShowLogoutButton = false;
        this.updateLoginFlag.emit(this.flagShowLogoutButton);
        sessionStorage.removeItem("access");
        sessionStorage.removeItem("refresh");
    };
    HeaderComponent.prototype.loadLoginComp = function () {
        if (sessionStorage.getItem("access") != null || sessionStorage.getItem("access") != undefined) {
            this.flagShowLogoutButton = true;
            this.updateLoginFlag.emit(this.flagShowLogoutButton);
            this.showClaimOption = true;
        }
        //this.flagShowLogoutButton = true;
        //this.updateLoginFlag.emit(this.flagShowLogoutButton)
    };
    __decorate([
        core_2.Input()
    ], HeaderComponent.prototype, "sendDataToChild");
    __decorate([
        core_3.Output()
    ], HeaderComponent.prototype, "updateLoginFlag");
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css']
        })
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
