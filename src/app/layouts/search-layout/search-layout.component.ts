import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CombinacionService } from 'src/app/services/combinacion.service';
import { InfiniteScrollService } from 'src/app/services/infinite-scroll.service';
import { log } from 'src/app/utilities/utilities';


@Component({
  selector: 'app-search-layout',
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss']
})
export class SearchLayoutComponent implements OnInit {

  pagina:number;
  spinner$:Subject<boolean>=this.infiniteScroll.requestSpinner$



  constructor(
    private combinacion: CombinacionService,
    private infiniteScroll: InfiniteScrollService

  ) { }

  ngOnInit() {

  }

  onScroll() {
    log(null,"Haciendo scrol!!!","pink");
    ++this.pagina;
    console.log(this.pagina);
    this.combinacion.pagina$.next(this.pagina);
    this.infiniteScroll.requestSpinner$.next(true)
  }


}
