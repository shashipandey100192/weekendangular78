import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { FormsModule } from '@angular/forms';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PurchaseComponent } from './purchase/purchase.component';
import { MypipePipe } from './mypipes/mypipe.pipe';


@NgModule({
  declarations: [
    MyreactiveComponent,
    PurchaseComponent,
    MypipePipe
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesModule { }
