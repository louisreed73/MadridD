import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-documento',
  templateUrl: './documento.component.html',
  styleUrls: ['./documento.component.scss']
})
export class DocumentoComponent implements OnInit {
  // historylastURL:UrlSegment;
  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map=>{
      //Comprobación del id del documento referido
      console.log(map.get("id"));
      // Checkeo de la comprobacion de la URL
      // this.historylastURL=this.route.snapshot.url[0];
      // console.log(this.historylastURL.path)
      
    })
  }

}
