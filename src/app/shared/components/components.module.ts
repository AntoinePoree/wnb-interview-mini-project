import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliberateCardComponent } from './deliberate-card/deliberate-card.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DeliberateCardComponent],
  exports: [DeliberateCardComponent]
})
export class ComponentsModule { }
