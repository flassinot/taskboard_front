import { Component, OnInit } from '@angular/core';
import { CardList } from "../../components/card-list/card-list";
import { Task } from '../../models/task.model';
import { Tasklist } from '../../models/tasklist.model';
import { TasklistService } from '../../services/tasklist.service';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-taskboard',
  imports: [CardList],
  templateUrl: './taskboard.html',
  styleUrl: './taskboard.css',
})
export class Taskboard implements OnInit {

  tasklists: Tasklist[] = [];
  tasks: Task[] = [];

  constructor(private taskService: TaskService, private tasklistService: TasklistService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
    this.tasklists = this.tasklistService.getTasklists();
  }

  getTasks(taskListId: number): Task[] {
    return this.tasks.filter(t => t.taskListId === taskListId);
  }
}
