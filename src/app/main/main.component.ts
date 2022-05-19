import { IStack } from './../shared/models/stack';
import { IStats } from './../shared/models/stats';
import { Component } from '@angular/core';
import { ICandidate } from '../shared/models/candidate';
import { labelByStatus, Status } from '../shared/models/status';
import { MainService } from '../shared/services/main.service';
import { combineLatest, forkJoin, Observable, Subject, zip } from 'rxjs';
import { shareReplay, takeUntil, merge, map } from 'rxjs/operators';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private destroyed$ = new Subject<void>();
  readonly status = Status;

  readonly stats$: Observable<IStats[]> = this.mainService.getStats().pipe(takeUntil(this.destroyed$));
  readonly candidates$: Observable<ICandidate[]> = this.mainService.getWishs().pipe(takeUntil(this.destroyed$)).pipe(shareReplay(1));

  candidatesFilter$: Observable<ICandidate[]>;

  constructor(private mainService: MainService, private viewportScroller: ViewportScroller) {
    this.candidatesFilter$ = this.candidates$;
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  filterByStatus(status: Status): Observable<ICandidate[]> {
    return this.mainService.getWishFilteredByStatus(status).pipe(takeUntil(this.destroyed$));
  }

  filterCandidateByStatus(stacks: IStack[]) {
    if (stacks.length === 0) {
      this.candidatesFilter$ = this.candidates$;
    }

    if (stacks.length === 1) {
      this.candidatesFilter$ = this.filterByStatus(this.statusByLabel(stacks[0].label));
    }

    // I know, this is useless, but ive made it and this work if children passed an array, ive try smth different
    if (stacks.length > 1) {
      const filterIt = this.filterByStatus(this.statusByLabel(stacks[stacks.length - 1].label));
      this.candidatesFilter$ = combineLatest(this.candidatesFilter$, filterIt).pipe(map(([a, b]) => a.concat(b)));
    }
    setTimeout(() => {
      this.goToFilterCandidate();
    }, 100);
  }

  /**
   * Passed a label who corresponding to a Status, and return this one
   * @param label string
   * @returns Status
   */
  private statusByLabel(label: string): Status {
    const statusAndLabel = Object.entries(labelByStatus).find((statusAndLabel) => statusAndLabel[1] === label);
    return statusAndLabel[0] as Status;
  }

  private goToFilterCandidate() {
    this.viewportScroller.scrollToPosition([0, 400]);
    // Not really great, cuz i should made it with the observable object
    if (this.viewportScroller.getScrollPosition() !== [0, 400]) {
      setTimeout(() => {
        this.viewportScroller.scrollToPosition([0, 400]);
      }, 250);
    }
  }
}
