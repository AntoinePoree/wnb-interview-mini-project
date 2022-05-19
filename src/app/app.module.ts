import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './shared/components/components.module';
import { MainModule } from './main/main.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PipesModule } from './shared/pipes/pipes.module';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, MainModule, ComponentsModule, AppRoutingModule, PipesModule, BrowserAnimationsModule],
  providers: [ComponentsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
