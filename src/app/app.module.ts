import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { DataRetrievalInterceptor } from "./interceptors/data-retrieval.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HeaderComponent } from "./components/header/header.component";
import { NgxExtendedPdfViewerModule, 
     // NgxExtendedPdfViewerService,
     // NgxExtendedPdfViewerServerComponent,

 } from "ngx-extended-pdf-viewer";
// import { PdfFindbarService } from "ngx-extended-pdf-viewer/lib/toolbar/pdf-findbar/pdf-findbar-service";

// import {serverAPI} from "./mirage.api";

@NgModule({
     declarations: [AppComponent, HeaderComponent],
     imports: [
          BrowserModule,
          AppRoutingModule,
          HttpClientModule,
          BrowserAnimationsModule,
          // NgxExtendedPdfViewerModule,
          // NgxExtendedPdfViewerService
           
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
          // {
          //      provide:"finder",
          //      useClass:PdfFindbarService
          // }
          // NgxExtendedPdfViewerService
     ],
     bootstrap: [AppComponent],
})
export class AppModule {
     constructor() {
          // serverAPI();
     }
}
