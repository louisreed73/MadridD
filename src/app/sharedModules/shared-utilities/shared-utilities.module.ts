import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SpinnerComponent } from "../../sharedComponents/spinner/spinner.component";
import { MatProgressSpinnerModule } from "@angular/material";
import { FiltrosComponent } from "../../sharedComponents/filtros/filtros.component";
import { ReactiveFormsModule } from "@angular/forms";
import { FijarDirective } from "src/app/directives/fijar.directive";

@NgModule({
     declarations: [
          SpinnerComponent,
          FiltrosComponent,
          FijarDirective,

          ],
     imports: [
          CommonModule, 
          MatProgressSpinnerModule, 
          ReactiveFormsModule
     ],
     exports: [
          ReactiveFormsModule,
          SpinnerComponent, 
          MatProgressSpinnerModule, 
          FiltrosComponent,
          FijarDirective
     ],
})
export class SharedUtilitiesModule {}
