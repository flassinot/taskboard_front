import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  task = input(new Task());

}
