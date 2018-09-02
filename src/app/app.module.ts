import { NgtUniversalModule } from '@ng-toolkit/universal';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { GiphyService } from './giphy.service';
import { SafePipe } from './safe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SafePipe
  ],
  imports:[
 CommonModule,
NgtUniversalModule,
 
    
    HttpClientModule
  ],
  providers: [GiphyService],
})
export class AppModule { }
