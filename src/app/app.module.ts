import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    WjInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
