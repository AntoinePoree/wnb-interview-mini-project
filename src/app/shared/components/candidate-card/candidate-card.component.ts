import { Status } from './../../models/status';
import { Component, Input } from '@angular/core';
import { ICandidate } from '../../models/candidate';

export const numberForImage: number[] = [7, 8, 9, 10, 11, 13];

@Component({
  selector: 'app-candidate-card',
  templateUrl: './candidate-card.component.html',
  styleUrls: ['./candidate-card.component.scss'],
})
export class CandidateCardComponent {
  @Input() readonly candidate: ICandidate;

  readonly Status = Status;
  imgPath = `assets/candidate/NoPath - Copie (${numberForImage[Math.floor(Math.random() * numberForImage.length)]}).png`;
}
