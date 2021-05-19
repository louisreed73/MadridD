import { Location } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";
import { DocumentosService } from "src/app/services/documentos.service";

@Component({
     selector: "app-detail-layout",
     templateUrl: "./detail-layout.component.html",
     styleUrls: ["./detail-layout.component.scss"],
})
export class DetailLayoutComponent implements OnInit {
     documento: any=23;
     constructor(
          private documentosServ: DocumentosService,
          private location: Location,
       @Inject(Window) private window: Window,

          ) {}

     ngOnInit() {
          this.documento = this.documentosServ.selectedDocument;

          console.log(this.documento);
          this.window.scrollTo(0,0);
     }

     volver() {
          this.location.back();
        }
}
