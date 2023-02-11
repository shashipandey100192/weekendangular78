import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule } from '@angular/forms';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MyreactiveComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesModule { }
