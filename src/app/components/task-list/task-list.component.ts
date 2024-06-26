import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TaskComponent } from '../task/task.component';
import { Task } from '../../models/task';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule, TaskComponent],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {
  @Input() tasks!: Task[];
}
