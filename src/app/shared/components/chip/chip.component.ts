import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStack } from '../../models/stack';

@Component({
  selector: 'app-chip',
  templateUrl: './chip.component.html',
  styleUrls: ['./chip.component.scss'],
})
export class ChipComponent {
  @Input() stack: IStack;
  @Input() active: boolean;
  @Output() stackSelected = new EventEmitter<IStack[]>();
}
