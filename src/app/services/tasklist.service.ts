import { Injectable } from '@angular/core';
import { Tasklist } from '../models/tasklist.model';

@Injectable({
  providedIn: 'root',
})
export class TasklistService {

  public getTasklists(): Tasklist[] {
    return [
      { id: 1, description: "TODO" },
      { id: 2, description: "DOING" },
      { id: 3, description: "DONE" }
    ]
  }
}
