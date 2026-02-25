import { Component, input } from '@angular/core';
import { Task } from '../../models/task.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-card',
  imports: [MatCardModule, MatButtonModule, CdkDrag],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {

  task = input(new Task());

}
