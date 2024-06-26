import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
})
export class TaskListComponent {}
