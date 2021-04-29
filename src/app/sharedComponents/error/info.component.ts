import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { InfoService } from "src/app/services/info.service";

@Component({
     selector: "app-info",
     templateUrl: "./info.component.html",
     styleUrls: ["./info.component.scss"],
})
export class InfoComponent implements OnInit, OnDestroy {

     documentosInfo$=this.infoServ.documentosInfo$;
     httpErrorInfo$=this.infoServ.documentosInfo$;


     constructor(
          private infoServ: InfoService
     ) {}

     ngOnInit() {

     }

     ngOnDestroy() {
     }
}
