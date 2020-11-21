"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ClaimsRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var create_user_component_1 = require("./create-user/create-user.component");
var edit_user_component_1 = require("./edit-user/edit-user.component");
var routes = [
    { path: 'create', component: create_user_component_1.CreateUserComponent },
    { path: 'edit', component: edit_user_component_1.EditUserComponent },
];
var ClaimsRoutingModule = /** @class */ (function () {
    function ClaimsRoutingModule() {
    }
    ClaimsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], ClaimsRoutingModule);
    return ClaimsRoutingModule;
}());
exports.ClaimsRoutingModule = ClaimsRoutingModule;
