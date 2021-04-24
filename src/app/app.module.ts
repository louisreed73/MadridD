import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataRetrievalInterceptor } from "./interceptors/data-retrieval.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import {serverAPI} from "./mirage.api";


@NgModule({
     declarations: [AppComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          BrowserAnimationsModule,
     ],
     providers: [
          {
               provide: HTTP_INTERCEPTORS,
               useClass: DataRetrievalInterceptor,
               multi: true,
          },
          {
               provide: Window,
               useValue: window,
             },
     ],
     bootstrap: [AppComponent],
})
export class AppModule {

     constructor() {

          serverAPI();
     }
}
