import { Component, OnInit } from '@angular/core';

import {FormGroup,FormControl,FormBuilder,NgForm, Validators } from '@angular/forms'
import { LoginService } from '../../../services/user/login.service';
import { Login} from '../../../custominterface/login'
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  signInForm: FormGroup;

  email: string = "";
  password: string = "";


  constructor(private formbuilder: FormBuilder,
              private loginservice: LoginService,
              private router:Router) {
    
    this.signInForm = formbuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
    //password: ['', Validators.required, Validators.minLength(6)] //for sign up
    console.log("hello form login comp");

  }

  ngOnInit(): void {
  }

  postData(signInForm: any) {
    console.log(signInForm.controls)
    this.email = signInForm.controls.email.value;
    this.password = signInForm.controls.password.value;
    console.log("hi value is " + this.email + " " + this.password)
    
    let loginData = this.signInForm.value;
    this.login(loginData);
  }

  login(loginData:Login) {
    this.loginservice.userLogin(loginData).subscribe(data => {

      if (data.status == 200) {
        let fullvalue = JSON.stringify(data.body['tokens']);
        let refreshKey = fullvalue.split("'refresh':").pop().split(',')[0];
        let accessKey = fullvalue.split("'access':").pop().split('}')[0];
        let access = accessKey.substring(2, accessKey.length - 1);
        let refresh = refreshKey.substring(2, refreshKey.length - 1);
        //console.log("refresh - " + access);
        //console.log("access - " + refresh);
        sessionStorage.setItem("access",access);
        sessionStorage.setItem("refresh", refresh);
        
        this.router.navigate(['/home'])
      }
      
    });
  }

}
