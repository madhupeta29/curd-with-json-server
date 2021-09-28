import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from "@angular/material";
import {MatPaginatorModule} from '@angular/material/paginator';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatGridListModule
  ],
  exports :[
    Material.MatToolbarModule,
    Material.MatGridListModule,
    MatPaginatorModule


  ],
  
})
export class MaterialModule { }
