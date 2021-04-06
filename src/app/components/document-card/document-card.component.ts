import {
     ChangeDetectionStrategy,
     Component,
     Input,
     OnInit,
} from "@angular/core";

@Component({
     selector: "app-document-card",
     templateUrl: "./document-card.component.html",
     styleUrls: ["./document-card.component.scss"],
     changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DocumentCardComponent implements OnInit {
     @Input() documento: any;
     constructor() {}

     ngOnInit() {}
}
