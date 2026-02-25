import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  public getTasks(): Task[] {
    return [
      {
        id: 1,
        description: "tests",
        userId: 1,
        taskListId: 1
      },
      {
        id: 2,
        description: "Git init",
        userId: 1,
        taskListId: 2
      },
      {
        id: 3,
        description: "services",
        userId: 1,
        taskListId: 2
      },
    ]
  }
}
