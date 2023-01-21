import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { MynavbarComponent } from './components/mynavbar/mynavbar.component';
import { SimpleBootstrapComponent } from './simple-bootstrap/simple-bootstrap.component';
import { NgbootstrappageComponent } from './ngbootstrappage/ngbootstrappage.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MetrialpageComponent } from './metrialpage/metrialpage.component';
import {MatButtonModule, MatButton} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCommonModule} from '@angular/material/core';
import { PropertybindingComponent } from './propertybinding/propertybinding.component';
import { WelcomeComponent } from './welcome/welcome.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    MynavbarComponent,
    SimpleBootstrapComponent,
    NgbootstrappageComponent,
    MetrialpageComponent,
    PropertybindingComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbAccordionModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatDatepickerModule,
    MatCommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
