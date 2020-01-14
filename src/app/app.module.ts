import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/general/home/home.component';
import { NotFoundComponent } from './modules/general/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {ServiceWorkerModule, SwRegistrationOptions} from '@angular/service-worker';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ServiceWorkerModule.register('/ngsw-worker.js'),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
