import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate';
import { IStack } from 'src/app/shared/models/stack';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.scss'],
})
export class StatusFilterComponent {
  @Input() readonly candidates: ICandidate[];
  @Output() stackSelected = new EventEmitter<IStack[]>();
}
