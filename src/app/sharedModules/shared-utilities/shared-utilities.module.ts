import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../../sharedComponents/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material";
import { FiltrosComponent } from "../../sharedComponents/filtros/filtros.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
     declarations: [SpinnerComponent, FiltrosComponent],
     imports: [CommonModule, MatProgressSpinnerModule, ReactiveFormsModule],
     exports: [
          ReactiveFormsModule,
          SpinnerComponent, 
          MatProgressSpinnerModule, 
          FiltrosComponent
     ],
})
export class SharedUtilitiesModule {}
