import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate';
import { ILoadingState } from 'src/app/shared/models/loading';
import { IStack } from 'src/app/shared/models/stack';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.scss'],
})
export class StatusFilterComponent {
  readonly LoadingState = ILoadingState;

  @Input() readonly candidates: ICandidate[];
  @Input() readonly displayedReset: boolean;
  @Output() stackSelected = new EventEmitter<IStack[]>();
  @Output() resetStack = new EventEmitter<void>();
}
