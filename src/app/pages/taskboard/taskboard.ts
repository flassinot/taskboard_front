import { CdkDropList } from '@angular/cdk/drag-drop';
import { Component, inject, OnInit } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { combineLatest, map } from 'rxjs';
import { CardList } from "../../components/card-list/card-list";
import { TaskService } from '../../services/task.service';
import { TasklistService } from '../../services/tasklist.service';

@Component({
  selector: 'app-taskboard',
  imports: [CardList, CdkDropList],
  templateUrl: './taskboard.html',
  styleUrl: './taskboard.css',
})
export class Taskboard implements OnInit {

  private taskService: TaskService = inject(TaskService);
  private tasklistService: TasklistService = inject(TasklistService);

  combined$ = combineLatest([
    this.tasklistService.getTasklists(),
    this.taskService.getTasks()
  ]).pipe(
    map(([lists, tasks]) =>
      lists.map(list => ({
        ...list,
        tasks: tasks.filter(t => t.taskListId === list.id)
      }))
    )
  );

  combined = toSignal(this.combined$);

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  drop(event: any) {
    console.info(event);
  }
}
