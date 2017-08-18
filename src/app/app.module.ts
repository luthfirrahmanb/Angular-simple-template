import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ChartsModule } from 'ng2-charts';
//angular material for css
import { MaterialModule } from '@angular/material';

//hammer js
import 'hammerjs';

// Ng2PageScroll
import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2PageScrollModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
