import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, CardOneComponent, CardTwoComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
