import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompoooCardComponent } from './compooo-card/compooo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CompoooCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
