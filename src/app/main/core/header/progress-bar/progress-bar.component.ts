import { Component, Input } from '@angular/core';
import { ICandidate } from 'src/app/shared/models/candidate';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent {
  @Input() readonly candidates: ICandidate[];
}
