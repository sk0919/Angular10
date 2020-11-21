"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MaterialModule = void 0;
var core_1 = require("@angular/core");
//import { CommonModule } from '@angular/common';
/** importing the material module at one place */
var button_1 = require("@angular/material/button");
var sidenav_1 = require("@angular/material/sidenav");
var toolbar_1 = require("@angular/material/toolbar");
var input_1 = require("@angular/material/input");
//SidenavBarModule
//import {MatToolbarRow} from '@angular/material/toolbar'
/**
 * One constant for storing all the imported module and
 * export it by the name of the constant name
 */
var MATERIAL_COMPONENTS = [
    button_1.MatButtonModule, sidenav_1.MatSidenavModule, toolbar_1.MatToolbarModule, input_1.MatInputModule
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        core_1.NgModule({
            declarations: [],
            imports: [
                //CommonModule
                MATERIAL_COMPONENTS
            ],
            exports: [MATERIAL_COMPONENTS]
        })
    ], MaterialModule);
    return MaterialModule;
}());
exports.MaterialModule = MaterialModule;
