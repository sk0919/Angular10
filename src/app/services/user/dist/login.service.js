"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
        this.loginUrl = "http://127.0.0.1:8000/auth/login/";
    }
    LoginService.prototype.userLogin = function (login) {
        var opts = {
            headers: new http_1.HttpHeaders({
                'X-Requested-With': 'HttpClient',
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin": "*"
            }),
            observe: "response"
        };
        return this.http.post(this.loginUrl, login, opts);
    };
    LoginService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;
