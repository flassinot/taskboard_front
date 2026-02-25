import { inject, Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  private BASE_URL = 'http://localhost:8080/api/tasks';
  private http = inject(HttpClient);

  public getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.BASE_URL);
  }
}
