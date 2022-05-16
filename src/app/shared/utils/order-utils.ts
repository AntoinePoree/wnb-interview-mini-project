import { ICandidate } from '../models/candidate';
import { orderByStatus, Status } from '../models/status';

export abstract class OrderUtils {
  static sortByStatus(a: [Status, [ICandidate]], b: [Status, [ICandidate]]) {
    const aWeight = orderByStatus[a[0]];
    const bWeight = orderByStatus[b[0]];
    if (aWeight < bWeight) return -1;
    if (aWeight > bWeight) return 1;
    return 0;
  }
}
