import { Status } from './../models/status';
import { Pipe, PipeTransform } from '@angular/core';
import { ICandidate } from '../models/candidate';

@Pipe({
  name: 'byStatus',
})
export class ByStatusPipe implements PipeTransform {
  transform(candidates: ICandidate[]): [string, [Status, ICandidate]][] {
    let result: [Status, ICandidate][] = [];
    candidates.forEach((candidate) => {
      if (!result[candidate.status]) {
        result[candidate.status] = [candidate];
      } else {
        result[candidate.status].push(candidate);
      }
    });
    return Object.entries(result);
  }
}
