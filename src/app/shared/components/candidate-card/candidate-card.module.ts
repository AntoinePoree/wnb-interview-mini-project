import { LittleChipModule } from './../little-chip/little-chip.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardComponent } from './candidate-card.component';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  imports: [CommonModule, LittleChipModule, PipesModule],
  declarations: [CandidateCardComponent],
  exports: [CandidateCardComponent],
})
export class CandidateCardModule {}
