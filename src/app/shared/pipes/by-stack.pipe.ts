import { colorByStatus, labelByStatus, orderByStatus, Status } from './../models/status';
import { Pipe, PipeTransform } from '@angular/core';
import { OrderUtils } from '../utils/order-utils';
import { ICandidate } from '../models/candidate';
import { IStack } from '../models/stack';

function generateStack(status: Status, count: number, all: number): IStack {
  return {
    color: colorByStatus[status],
    label: labelByStatus[status],
    value: count,
    percentage: (count / all) * 100,
  };
}

@Pipe({
  name: 'byStack',
})
export class ByStackPipe implements PipeTransform {
  transform(value: [Status, [ICandidate]][], allCount: number): IStack[] {
    let result: IStack[] = [];

    value
      .filter((element) => element[0] !== Status.Completed && element[0] !== Status.Cancelled)
      .sort((a, b) => OrderUtils.sortByStatus(a, b))
      .forEach((element) => {
        result.push(generateStack(element[0], element[1].length, allCount));
      });

    return result;
  }
}
