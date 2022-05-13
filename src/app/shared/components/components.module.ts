import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardModule } from './candidate-card/candidate-card.module';
import { ChipModule } from './chip/chip.module';

@NgModule({
  imports: [CommonModule],
  exports: [CandidateCardModule, ChipModule],
})
export class ComponentsModule {}
