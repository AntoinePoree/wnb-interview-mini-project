import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ComponentsModule } from './shared/components/components.module';
import { MainModule } from './main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MainModule, ComponentsModule, AppRoutingModule],
  providers: [ComponentsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
