import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TaskListComponent, AsyncPipe, JsonPipe],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly url = '/assets/data.json';
  readonly tasks: Observable<any> = this.httpClient.get(this.url);

  constructor(private httpClient: HttpClient) {}
}
