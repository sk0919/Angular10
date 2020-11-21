import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [LoginComponent, RegisterComponent, ResetPasswordComponent],
  imports: [
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    AuthRoutingModule,

    
  ],

  //giving acess of all the comps eg login , register , reset wherever auth module is going to be used
  exports: [
    LoginComponent,
    RegisterComponent,
    ResetPasswordComponent
  ],

  providers: []
})
export class AuthModule { }
