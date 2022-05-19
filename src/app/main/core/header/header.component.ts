import { ILoadingState } from './../../../shared/models/loading';
import { ICandidate } from './../../../shared/models/candidate';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IStack } from 'src/app/shared/models/stack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() readonly candidates: ICandidate[];
  @Output() filterCandidateByStatus = new EventEmitter<IStack[]>();

  stacksFilter: IStack[] = [];
  displayedReset = false;

  filterCard(stack: IStack) {
    if (this.stacksFilter.find((cs) => cs === stack)) {
      stack.active = false;
      this.stacksFilter = this.stacksFilter.filter((cs) => cs.label !== stack.label);
      this.displayedReset = false;
    } else {
      this.stacksFilter.map((s) => (s.active = false));
      stack.active = true;
      this.stacksFilter = [stack];
      this.displayedReset = true;
    }
    this.filterCandidateByStatus.emit(this.stacksFilter);
  }

  resetFilter() {
    this.stacksFilter.map((s) => (s.active = false));
    this.displayedReset = false;
    this.filterCandidateByStatus.emit([]);
  }
}
