import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MypageComponent } from './mypage/mypage.component';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {
    path:'',
    component:WelcomeComponent
  },
  {
    path:'binding',
    component:PropertybindingComponent
  },
  {
    path:'page',
    component:MypageComponent
  },
  {
    path:'sales',
    loadChildren:()=> import('./modules/sales/sales.module').then(m => m.SalesModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
