import { DOCUMENT } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     Inject,
     OnDestroy,
     OnInit,
} from "@angular/core";
import { ActivatedRoute} from "@angular/router";
import { NgxExtendedPdfViewerService } from "ngx-extended-pdf-viewer";
import { DocumentosService } from "src/app/services/documentos.service";
import { SearchTriggerService } from "src/app/services/search-trigger.service";
import { Subscription } from "rxjs";
import { map} from "rxjs/operators";

@Component({
     selector: "app-documento",
     templateUrl: "./documento.component.html",
     styleUrls: ["./documento.component.scss"],
     changeDetection:ChangeDetectionStrategy.OnPush
})
export class DocumentoComponent implements OnInit, OnDestroy {
     pdfSrc = "/assets/ejemplo_pdf_3.pdf";
     pdfQuery: any;
     pageLabel: string;
     fuzzySubsc:Subscription;
     pruebas:Array<string>=[
          "summer",
          "sommerville",
          "motherFucker",
          "what",
          "shit",
     ];

     tempString:Array<string>=[];


     // buscando:any=(()=>{

     //      let count=11;

     //      return (e)=>{
               

     //      }
     //      // e.count+=1;
     //      // setTimeout(()=>{

     //      //      this.ngxExtendedPdfViewerService.find(this.pruebas[count],{
     //      //           fuzzySearch: true
     //      //      })
     //      // },5000)
     //      // if(count<5&&!e.count) {
     //      //      this.buscando(e,++count);
     //      // }
     // })()


     constructor(
          private route: ActivatedRoute,
          private documentosServ: DocumentosService,
          private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService,
          private searchTriggerServ:SearchTriggerService,
          @Inject(DOCUMENT) private _document: Document,

     ) {}

     ngOnInit() {
          this.fuzzySubsc=this.searchTriggerServ.fuzzySearch
          .pipe(
               map(d=>{
                    let clearedSpacesString=d.split(/\s/);
                    console.log(clearedSpacesString)
                    return clearedSpacesString
               })
               )
               .subscribe(d=>{
               console.log(d);

               this.tempString=d;
               this.fuzzySearching(d.join(""))

          })
     }

     ngAfterViewInit(): void {
          //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
          //Add 'implements AfterViewInit' to the class.
     }

     // {
     //      highlightAll?: boolean;
     //      matchCase?: boolean;
     //      wholeWords?: boolean;
     //      ignoreAccents?: boolean;
     //      findMultipleSearchTexts?: boolean;
     //      fuzzySearch?: boolean;
     //  }

     pRendered(e) {
 

               console.log(e)

     }

     estadoBusqueda(e) {
          console.log(e)
     }

     buscando(e) {
   
          if(!e.total) {

               // let time=Date.now();
               // e.tiempo=time;
               // e.results=!!(e.total)

               //      e.count=count;
               //      count--;
               //      console.log(`%cEl contador es: ${count}`,'color:lime');
                    

               console.log(e);
               let total=Math.round(this.tempString.length);
               // console.log(`%cdividimos la frase completa entre 5 y es: ${div}`,'color:lime');
               let shorten=this.tempString.slice(0,Math.round(total / 10 ));
               // console.log(`%cLa divisón por el contador es: ${div*count}`,'color:lime');
               console.log(`%cLa frase ahora es: ${shorten.join("")}`,'color:lime');
               this.fuzzySearching(shorten.join(""));
               this.tempString=shorten;
          }

          else {
               console.log("Hay resultados!!!!")
          }
     }
     
     ngOnDestroy(): void {
          //Called once, before the instance is destroyed.
          //Add 'implements OnDestroy' to the class.
          this.fuzzySubsc.unsubscribe()
     }

     fuzzySearching(query:string):void {
          console.log(query)
          let findButton=this._document.querySelector("#viewFind") as HTMLButtonElement;
               let findBar=this._document.querySelector("#findbar") as HTMLElement;
                    let searchisHidden=findBar.classList.contains("hidden");

                         if(searchisHidden) {
                              findButton.click();
                         }
                         this.ngxExtendedPdfViewerService.find(query,{
                              fuzzySearch: true
                         })

     }
     
     

     
}
