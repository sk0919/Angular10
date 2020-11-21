import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClaimsRoutingModule } from './claims-routing.module';
import { CreateUserComponent } from './create-user/create-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [CreateUserComponent, EditUserComponent],
  imports: [
    CommonModule,
    ClaimsRoutingModule
  ]
})
export class ClaimsModule { }
