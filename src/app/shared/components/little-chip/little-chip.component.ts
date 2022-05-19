import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IChip } from '../../models/stack';

@Component({
  selector: 'app-little-chip',
  templateUrl: './little-chip.component.html',
  styleUrls: ['./little-chip.component.scss'],
})
export class LittleChipComponent {
  @Input() chip: IChip;
}
