import { Component, Input, OnInit } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate';

@Component({
  selector: 'app-list-candidate',
  templateUrl: './list-candidate.component.html',
  styleUrls: ['./list-candidate.component.scss'],
})
export class ListCandidateComponent implements OnInit {
  @Input() readonly candidates: ICandidate[];

  constructor() {}

  ngOnInit() {}
}
