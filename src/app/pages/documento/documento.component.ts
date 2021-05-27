import { Location } from "@angular/common";
import { DOCUMENT } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     ElementRef,
     Inject,
     OnDestroy,
     OnInit,
     ViewChild,
} from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { NgxExtendedPdfViewerService, PdfFindButtonComponent } from "ngx-extended-pdf-viewer";
import { PdfFindbarService } from "ngx-extended-pdf-viewer/lib/toolbar/pdf-findbar/pdf-findbar-service";
import { DocumentosService } from "src/app/services/documentos.service";
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
import { SearchTriggerService } from "src/app/services/search-trigger.service";
import { from, of, Subscription } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
@Component({
     selector: "app-documento",
     templateUrl: "./documento.component.html",
     styleUrls: ["./documento.component.scss"],
})
export class DocumentoComponent implements OnInit, OnDestroy {
     // historylastURL: UrlSegment;
     // valor: number = 0.25;
     @ViewChild("link", { static: true }) link: ElementRef;
     // @ViewChild(PdfFindButtonComponent,{static:true}) find: PdfFindButtonComponent;
     // @ViewChild("findInput", { static: true }) find: ElementRef;

     // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
     pdfSrc = "/assets/ejemplo_pdf_3.pdf";

     pdfQuery: any;
     // pdfDefaultOptions.assetsFolder = 'bleeding-edge';

     // @ViewChild(PdfViewerComponent, { static: true })
     // private pdfComponent: PdfViewerComponent;
     page = 5;

     pageLabel: string;
     fuzzySubsc:Subscription;
     pdfDownload_Name=`descarga_${(Math.random() * 10)}`;


     constructor(
          private route: ActivatedRoute,
          private documentosServ: DocumentosService,
          private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService,
          private searchTriggerServ:SearchTriggerService,
          @Inject(DOCUMENT) private _document: Document,


//     private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService,
//     private pdfFindbarService:PdfFindbarService

          
           //   private location: Location
     ) {}

     ngOnInit() {
          // this.route.paramMap.subscribe((map) => {
          //      //Comprobación del id del documento referido
          //      console.log(map.get("id"));
          //      // Checkeo de la comprobacion de la URL
          //      // this.historylastURL=this.route.snapshot.url[0];
          //      // console.log(this.historylastURL.path)
          // });
          // console.log(this.pdfComponent);
          


          this.fuzzySubsc=this.searchTriggerServ.fuzzySearch
          .pipe(
               map(d=>{
                    let clearedSpacesString=d.split(" ").join("");
                    console.log(clearedSpacesString)
                    return clearedSpacesString
               })
               )
               .subscribe(d=>{
               console.log(d);

               this.fuzzySearching(d)
               


                    // findButton.click();

               
          })
     }

     ngAfterViewInit(): void {
          //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
          //Add 'implements AfterViewInit' to the class.
          // console.log(this.find)


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
          // console.log(e.source.textLayerFactory.findController.state);
          
          // this.ngxExtendedPdfViewerService.find("maria",{
          //      highlightAll: true,
          //       matchCase: false,
          //       wholeWords: false,
          //       ignoreAccents: true
          // })

          // this.ngxExtendedPdfViewerService.
          // console.log(this.ngxExtendedPdfViewerService)
          // console.log(this.find)



     }

     buscando(e) {
          // console.log(e);
          // console.log(this.ngxExtendedPdfViewerService);
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
