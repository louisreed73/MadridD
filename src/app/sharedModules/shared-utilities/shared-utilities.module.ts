import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../../sharedComponents/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material";

@NgModule({
     declarations: [SpinnerComponent],
     imports: [CommonModule, MatProgressSpinnerModule],
     exports: [SpinnerComponent, MatProgressSpinnerModule],
})
export class SharedUtilitiesModule {}
