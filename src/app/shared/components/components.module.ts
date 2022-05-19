import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CandidateCardModule } from './candidate-card/candidate-card.module';
import { ChipModule } from './chip/chip.module';
import { LoaderModule } from './loader/loader.module';
import { LittleChipModule } from './little-chip/little-chip.module';

@NgModule({
  imports: [CommonModule],
  exports: [CandidateCardModule, ChipModule, LoaderModule, LittleChipModule],
})
export class ComponentsModule {}
