import { colorByStatus, labelByStatus, Status } from '../models/status';
import { Pipe, PipeTransform } from '@angular/core';
import { IEntrie } from '../models/candidate';
import * as moment from 'moment';

@Pipe({
  name: 'diffBetweenStartAndEnd',
})
export class DiffBetweenStartAndEndPipe implements PipeTransform {
  transform(entrie: IEntrie): string {
    const duration = moment.duration(moment(entrie.dateEnd).diff(moment(entrie.dateBegin)));
    return duration.asHours() + 'h';
  }
}
