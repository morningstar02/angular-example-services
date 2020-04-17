import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExampleServicesModule } from './example-services/example-services.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExampleServicesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
