import { Location } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     ElementRef,
     OnInit,
     ViewChild,
} from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { NgxExtendedPdfViewerService } from "ngx-extended-pdf-viewer";
import { PdfFindbarService } from "ngx-extended-pdf-viewer/lib/toolbar/pdf-findbar/pdf-findbar-service";
import { DocumentosService } from "src/app/services/documentos.service";
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
     selector: "app-documento",
     templateUrl: "./documento.component.html",
     styleUrls: ["./documento.component.scss"],
})
export class DocumentoComponent implements OnInit {
     // historylastURL: UrlSegment;
     // valor: number = 0.25;
     @ViewChild("link", { static: true }) link: ElementRef;
     // @ViewChild("findInput", { static: true }) find: ElementRef;

     // pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
     pdfSrc = "/assets/ejemplo_pdf_1.pdf";

     pdfQuery: any;
     // pdfDefaultOptions.assetsFolder = 'bleeding-edge';

     // @ViewChild(PdfViewerComponent, { static: true })
     // private pdfComponent: PdfViewerComponent;
     public page = 5;

     public pageLabel: string;

     constructor(
          private route: ActivatedRoute,
          private documentosServ: DocumentosService,
          private ngxExtendedPdfViewerService: NgxExtendedPdfViewerService
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
     }

     ngAfterViewInit(): void {
          //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
          //Add 'implements AfterViewInit' to the class.
          // console.log(this.find)
     }

     pRendered(e) {
          console.log(e);
          this.ngxExtendedPdfViewerService.find("maria",{
               highlightAll: true,
                matchCase: false,
                wholeWords: false,
                ignoreAccents: true
          })

     }
     

     
}
