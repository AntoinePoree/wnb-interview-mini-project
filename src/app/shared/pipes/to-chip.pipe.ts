import { colorByStatus, labelByStatus, Status } from '../models/status';
import { Pipe, PipeTransform } from '@angular/core';
import { ICandidate } from '../models/candidate';
import { IChip } from '../models/stack';

@Pipe({
  name: 'toChip',
})
export class ByChipPipe implements PipeTransform {
  transform(candidate: ICandidate): IChip {
    return {
      color: colorByStatus[candidate.status],
      label: labelByStatus[candidate.status],
    };
  }
}
