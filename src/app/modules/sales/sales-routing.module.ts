import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { SimpleformComponent } from './simpleform/simpleform.component';

const routes: Routes = [
  {
    path:'',
    component:SimpleformComponent
  },
  {
    path:'reactiveform',
    component:MyreactiveComponent
  },
  {
    path:'purchase',
    component:PurchaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
