import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ByStatusPipe } from './by-status.pipe';
import { ByStackPipe } from './by-stack.pipe';

@NgModule({
  declarations: [ByStatusPipe, ByStackPipe],
  imports: [CommonModule],
  exports: [ByStatusPipe, ByStackPipe],
})
export class PipesModule {}
