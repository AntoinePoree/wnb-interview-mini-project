import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardComponent } from './candidate-card.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CandidateCardComponent],
  exports: [CandidateCardComponent],
})
export class CandidateCardModule {}
