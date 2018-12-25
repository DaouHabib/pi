import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LayoutComponent } from './Modules/layout/layout.component';
import { UserComponent } from './Modules/user/user.component';
import { HomeComponent } from './Modules/home/home.component';
import {RoutesModule} from './routes/routes.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UserComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RoutesModule, FormsModule, ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
