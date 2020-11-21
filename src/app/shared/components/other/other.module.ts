import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtherRoutingModule } from './other-routing.module';
import { NewsComponent } from './news/news.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [NewsComponent, HomeComponent, ContactComponent, AboutComponent],
  imports: [
    CommonModule,
    OtherRoutingModule
  ]
})
export class OtherModule { }
