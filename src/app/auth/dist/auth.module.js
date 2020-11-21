"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AuthModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var auth_routing_module_1 = require("./auth-routing.module");
var login_component_1 = require("./components/login/login.component");
var register_component_1 = require("./components/register/register.component");
var reset_password_component_1 = require("./components/reset-password/reset-password.component");
var forms_1 = require("@angular/forms");
var material_module_1 = require("../material/material.module");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        core_1.NgModule({
            declarations: [login_component_1.LoginComponent, register_component_1.RegisterComponent, reset_password_component_1.ResetPasswordComponent],
            imports: [
                material_module_1.MaterialModule,
                common_1.CommonModule,
                forms_1.ReactiveFormsModule,
                auth_routing_module_1.AuthRoutingModule,
            ],
            //giving acess of all the comps eg login , register , reset wherever auth module is going to be used
            exports: [
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                reset_password_component_1.ResetPasswordComponent
            ],
            providers: []
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
