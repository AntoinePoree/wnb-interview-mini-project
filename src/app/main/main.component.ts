import { IStats } from './../shared/models/stats';
import { Component, OnInit } from '@angular/core';
import { ICandidate } from '../shared/models/candidate';
import { Status } from '../shared/models/status';
import { MainService } from '../shared/services/main.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  candidates: ICandidate[];
  stats: IStats[];

  private destroyed$ = new Subject<void>();
  constructor(private mainService: MainService) {}

  ngOnInit() {
    this.mainService
      .getWishs()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ICandidate[]) => {
        this.candidates = { ...data };
      });

    this.mainService
      .getStats()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: IStats[]) => {
        this.stats = { ...data };
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.complete();
  }

  filterByStatus(status: Status) {
    this.mainService
      .getWishFilteredByStatus(status)
      .pipe(takeUntil(this.destroyed$))
      .subscribe((data: ICandidate[]) => {
        this.candidates = { ...data };
      });
  }
}
