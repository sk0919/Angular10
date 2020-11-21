"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LoginComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formbuilder, loginservice, router) {
        this.formbuilder = formbuilder;
        this.loginservice = loginservice;
        this.router = router;
        this.email = "";
        this.password = "";
        this.signInForm = formbuilder.group({
            email: ['', [forms_1.Validators.required, forms_1.Validators.email]],
            password: ['', [forms_1.Validators.required]]
        });
        //password: ['', Validators.required, Validators.minLength(6)] //for sign up
        console.log("hello form login comp");
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.postData = function (signInForm) {
        console.log(signInForm.controls);
        this.email = signInForm.controls.email.value;
        this.password = signInForm.controls.password.value;
        console.log("hi value is " + this.email + " " + this.password);
        var loginData = this.signInForm.value;
        this.login(loginData);
    };
    LoginComponent.prototype.login = function (loginData) {
        var _this = this;
        this.loginservice.userLogin(loginData).subscribe(function (data) {
            if (data.status == 200) {
                var fullvalue = JSON.stringify(data.body['tokens']);
                var refreshKey = fullvalue.split("'refresh':").pop().split(',')[0];
                var accessKey = fullvalue.split("'access':").pop().split('}')[0];
                var access = accessKey.substring(2, accessKey.length - 1);
                var refresh = refreshKey.substring(2, refreshKey.length - 1);
                //console.log("refresh - " + access);
                //console.log("access - " + refresh);
                sessionStorage.setItem("access", access);
                sessionStorage.setItem("refresh", refresh);
                _this.router.navigate(['/home']);
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
