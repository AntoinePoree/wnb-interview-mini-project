import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LittleChipComponent } from './little-chip.component';

@NgModule({
  imports: [CommonModule],
  declarations: [LittleChipComponent],
  exports: [LittleChipComponent],
})
export class LittleChipModule {}
