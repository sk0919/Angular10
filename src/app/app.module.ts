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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//
//import { AuthModule } from './auth/auth.module';
import {FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module'
import { MaterialModule } from './material/material.module';
import { HttpClientModule } from '@angular/common/http';

//side nav route imports
// import { SidenavBarModule } from './shared/components/sidenav-bar/sidenav-bar.module'



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    //
    //AuthModule,
    FormsModule,
    SharedModule,

    MaterialModule,
    HttpClientModule,

    //side nav module
    // SidenavBarModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

//authmodule is lazy loaded so dont need to import here
