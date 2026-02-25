import { Component, input } from '@angular/core';
import { Card } from "../card/card";
import { Tasklist } from '../../models/tasklist.model';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-card-list',
  imports: [Card],
  templateUrl: './card-list.html',
  styleUrl: './card-list.css',
})
export class CardList {

  tasklist = input<Tasklist>();
  tasks = input<Task[]>([]);
}
