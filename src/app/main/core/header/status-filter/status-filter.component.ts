import { Component, Input, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate';

@Component({
  selector: 'app-status-filter',
  templateUrl: './status-filter.component.html',
  styleUrls: ['./status-filter.component.scss'],
})
export class StatusFilterComponent implements OnInit {
  @Input() readonly candidates: ICandidate[];

  constructor() {}

  ngOnInit() {}
}
