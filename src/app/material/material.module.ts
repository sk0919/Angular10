import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

/** importing the material module at one place */
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input'

//SidenavBarModule
//import {MatToolbarRow} from '@angular/material/toolbar'


/** 
 * One constant for storing all the imported module and 
 * export it by the name of the constant name
 */
const MATERIAL_COMPONENTS = [
  MatButtonModule , MatSidenavModule, MatToolbarModule, MatInputModule
]

@NgModule({
  declarations: [],
  imports: [
    //CommonModule
    MATERIAL_COMPONENTS
  ],
  exports: [MATERIAL_COMPONENTS]
  
})
export class MaterialModule { }
