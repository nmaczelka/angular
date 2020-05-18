import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AlertComponent } from "./alert/alert.component";
import { LoadingSpinnerComponent } from "./loading-spinner.component";
import { Placeholder } from "@angular/compiler/src/i18n/i18n_ast";
import { PlaceholderDirective } from "./placeholder/placeholder.directive";
import { DropDownDirective } from "./dropdown.directive";
import { CommonModule } from "@angular/common";
import { LoggingService } from '../logging.service';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceholderDirective,
    DropDownDirective,
    CommonModule,
  ],
  entryComponents: [AlertComponent],
  providers: [LoggingService],
})
export class SharedModule {}
