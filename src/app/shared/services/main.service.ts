import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICandidate } from '../models/candidate';
import { IStats } from '../models/stats';
import { Status } from '../models/status';

const configUrl = 'https://6143a763c5b553001717d062.mockapi.io/api/';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  constructor(private http: HttpClient) {}

  getWishs(): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(`${configUrl}wishes?sortBy=createdDate&order=desc`);
  }

  getWishFilteredByStatus(status: Status): Observable<ICandidate[]> {
    return this.http.get<ICandidate[]>(`${configUrl}wishes?status=${status}`);
  }

  getStats(): Observable<IStats[]> {
    return this.http.get<IStats[]>(`${configUrl}stats`);
  }
}
