import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './Modules/layout/layout.component';
import { UserComponent } from './Modules/user/user.component';
import { HomeComponent } from './Modules/home/home.component';
import {RoutesModule} from './routes/routes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MapMandateComponent } from './Modules/Mandates/map-mandate/map-mandate.component';
import { AllMandatesComponent } from './Modules/Mandates/all-mandates/all-mandates.component';
import { RequestComponent } from './Modules/request/request.component';
import {DndModule} from 'ng2-dnd';
import { MapClientComponent } from './Modules/map-client/map-client.component';
import { AddRequestComponent } from './Modules/add-request/add-request.component';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UserComponent,
    HomeComponent,
    MapMandateComponent,
    AllMandatesComponent,
    RequestComponent,
    MapClientComponent,
    AddRequestComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RoutesModule, FormsModule, ReactiveFormsModule,DndModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
