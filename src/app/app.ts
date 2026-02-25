import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Taskboard } from "./pages/taskboard/taskboard";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Taskboard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('taskboard_front');
}
