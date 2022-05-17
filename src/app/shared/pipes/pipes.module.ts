import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByStatusPipe } from './by-status.pipe';
import { ByStackPipe } from './by-stack.pipe';
import { ByChipPipe } from './to-chip.pipe';
import { DiffBetweenStartAndEndPipe } from './diff-between-start-and-end.pipe copy';

@NgModule({
  declarations: [ByStatusPipe, ByStackPipe, ByChipPipe, DiffBetweenStartAndEndPipe],
  imports: [CommonModule],
  exports: [ByStatusPipe, ByStackPipe, ByChipPipe, DiffBetweenStartAndEndPipe],
})
export class PipesModule {}
