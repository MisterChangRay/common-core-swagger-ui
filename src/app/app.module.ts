import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes,RouterModule } from '@angular/router';

import { ApiFilter } from './common/ApiFilter';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { SiderComponent } from './sider/sider.component';
import { ApiDocService } from './common/apiService';



@NgModule({
  declarations: [
    ApiFilter,
    AppComponent,
    HeaderComponent,
    SiderComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiDocService],
  bootstrap: [AppComponent]
})
export class AppModule { }
