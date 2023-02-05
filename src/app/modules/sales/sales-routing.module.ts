import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimpleformComponent } from './simpleform/simpleform.component';

const routes: Routes = [
  {
    path:'',
    component:SimpleformComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
