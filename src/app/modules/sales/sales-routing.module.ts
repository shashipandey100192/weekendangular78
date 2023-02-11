import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyreactiveComponent } from './myreactive/myreactive.component';
import { SimpleformComponent } from './simpleform/simpleform.component';

const routes: Routes = [
  {
    path:'',
    component:SimpleformComponent
  },
  {
    path:'reactiveform',
    component:MyreactiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
