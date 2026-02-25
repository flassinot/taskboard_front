import { inject, Injectable } from '@angular/core';
import { Tasklist } from '../models/tasklist.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {

  private BASE_URL = 'http://localhost:8080/api/tasklists';
  private http = inject(HttpClient);

  public getTasklists(): Observable<Tasklist[]> {
    return this.http.get<Tasklist[]>(this.BASE_URL);
  }
}
