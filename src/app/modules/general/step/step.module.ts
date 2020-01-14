import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StepComponent } from './step.component';
import { StepRoutingModule } from './step-routing.module';

@NgModule({
  imports: [
    CommonModule,
    StepRoutingModule
  ],
  exports: [
    StepComponent
  ],
  declarations: [
    StepComponent
  ],
  providers: [
  ],
})
export class StepModule { }
