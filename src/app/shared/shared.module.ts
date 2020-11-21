import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OtherModule } from './components/other/other.module';
import {MaterialModule } from '../material/material.module'
/**  */

import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, PageNotFoundComponent],
  imports: [
    CommonModule,RouterModule,MaterialModule, OtherModule
  ],

  exports: [
    HeaderComponent, FooterComponent
  ]

})
export class SharedModule { }
