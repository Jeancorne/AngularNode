import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import * as $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponentComponent } from './Index/index-component.component';

@NgModule({
  declarations: [
    AppComponent,   
    IndexComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
