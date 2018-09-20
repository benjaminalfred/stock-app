import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ClarityModule, ClrFormsNextModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { MainComponent } from './main/main.component';
import { ChartsModule } from 'ng2-charts';
import { DayComponent } from './day/day.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { StocksService } from './stocks.service';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    DayComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    BrowserAnimationsModule,
    routes,
    FormsModule,
    ChartsModule,
    ClrFormsNextModule,
    HttpClientModule
  ],
  providers: [StocksService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
