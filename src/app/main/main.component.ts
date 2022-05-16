import { IStats } from './../shared/models/stats';
import { Component } from '@angular/core';
import { ICandidate } from '../shared/models/candidate';
import { Status } from '../shared/models/status';
import { MainService } from '../shared/services/main.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  private destroyed$ = new Subject<void>();
  readonly status = Status;

  candidates$: Observable<ICandidate[]> = this.mainService.getWishs().pipe(takeUntil(this.destroyed$));
  readonly stats$: Observable<IStats[]> = this.mainService.getStats().pipe(takeUntil(this.destroyed$));

  constructor(private mainService: MainService) {}

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  filterByStatus(status: Status) {
    this.candidates$ = this.mainService.getWishFilteredByStatus(status).pipe(takeUntil(this.destroyed$));
  }
}
