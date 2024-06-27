import { Component, Input } from '@angular/core';
import { Priority, Status, Task } from '../../models/task';
import {
  DatePipe,
  NgClass,
  NgTemplateOutlet,
  TitleCasePipe,
} from '@angular/common';

@Component({
  selector: 'task',
  standalone: true,
  imports: [NgClass, DatePipe, TitleCasePipe, NgTemplateOutlet],
  templateUrl: './task.component.html',
})
export class TaskComponent {
  readonly status = Status;
  readonly priority = Priority;

  @Input() task!: Task;
  expandedTasks = false;

  toggleNestedTasks(): void {
    this.expandedTasks = !this.expandedTasks;
  }
}
