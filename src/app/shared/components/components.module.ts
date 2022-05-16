import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardModule } from './candidate-card/candidate-card.module';
import { ChipModule } from './chip/chip.module';
import { LoaderModule } from './loader/loader.module';

@NgModule({
  imports: [CommonModule],
  exports: [CandidateCardModule, ChipModule, LoaderModule],
})
export class ComponentsModule {}
