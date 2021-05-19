import { Location } from "@angular/common";
import {
     ChangeDetectionStrategy,
     Component,
     ElementRef,
     OnInit,
     ViewChild,
} from "@angular/core";
import { ActivatedRoute, UrlSegment } from "@angular/router";
import { PdfViewerComponent } from "ng2-pdf-viewer";
import { PDFProgressData } from "pdfjs-dist";

@Component({
     selector: "app-documento",
     templateUrl: "./documento.component.html",
     styleUrls: ["./documento.component.scss"],
})
export class DocumentoComponent implements OnInit {
     historylastURL: UrlSegment;
     valor:number=0.25;
     @ViewChild("link", { static: true }) link: ElementRef;
     pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
     // pdfSrc = "http://www.africau.edu/images/default/sample.pdf";

     pdfQuery:any;


     @ViewChild(PdfViewerComponent, { static: true })
     private pdfComponent: PdfViewerComponent;

     
     constructor(private route: ActivatedRoute) //   private location: Location
     {}

     ngOnInit() {
          // this.route.paramMap.subscribe((map) => {
          //      //Comprobación del id del documento referido
          //      console.log(map.get("id"));
          //      // Checkeo de la comprobacion de la URL
          //      // this.historylastURL=this.route.snapshot.url[0];
          //      // console.log(this.historylastURL.path)
          // });
          console.log(this.pdfComponent);
     }

     // abrir(e) {
     //   e.preventDefault();
     // }

     textLayerRendered(e: CustomEvent) {
          console.log("(text-layer-rendered)", e);
     }

     onProgress(progressData: PDFProgressData) {
          // do anything with progress data. For example progress indicator

          console.log(progressData.loaded);
          console.log(progressData.total);
     }

     buscando(search: string) {
          console.log(search);
          // this.pdfComponent.pdfFindController.executeCommand('find', {
          //      caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: search
          //    });
          this.pdfComponent.pdfFindController.executeCommand('find', {
               caseSensitive: false, findPrevious: undefined, highlightAll: true, phraseSearch: true, query: search
             });
     }

     searchQueryChanged(newQuery: string) {

          console.log(newQuery)

          if (newQuery !== this.pdfQuery) {
            this.pdfQuery = newQuery;
            this.pdfComponent.pdfFindController.executeCommand('find', {
              query: this.pdfQuery,
              highlightAll: true
            });
          } else {
            this.pdfComponent.pdfFindController.executeCommand('findagain', {
              query: this.pdfQuery,
              highlightAll: true
            });
          }


        }
}
