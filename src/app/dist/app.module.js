"use strict";
/**
 *
 *
 *
 *
 *
 *
 *
 * author :  Sumit Mishra
 * current version : 1.00, 28/10/20
 * updated version : 1.00, 28/10/20
 * since release of project version 1.00
 *
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
//
//import { AuthModule } from './auth/auth.module';
var forms_1 = require("@angular/forms");
var shared_module_1 = require("./shared/shared.module");
var material_module_1 = require("./material/material.module");
var http_1 = require("@angular/common/http");
//side nav route imports
// import { SidenavBarModule } from './shared/components/sidenav-bar/sidenav-bar.module'
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                animations_1.BrowserAnimationsModule,
                //
                //AuthModule,
                forms_1.FormsModule,
                shared_module_1.SharedModule,
                material_module_1.MaterialModule,
                http_1.HttpClientModule,
            ],
            providers: [http_1.HttpClientModule],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//authmodule is lazy loaded so dont need to import here
