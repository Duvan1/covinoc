import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { TasksService } from 'src/lib/services/tasks/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasksList: any[] = [];

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  getTasks(): void {
    this.taskService
      .get()
      .pipe(
        catchError((e) => {
          alert('ocurrio un error');
          throw e;
        })
      )
      .subscribe((tasks) => {
        console.log(tasks);
        this.tasksList = tasks;
      });
  }

  getTasksBySearch(search: string) {
    this.taskService
      .get()
      .pipe(
        catchError((e) => {
          alert('ocurrio un error');
          throw e;
        })
      )
      .subscribe((tasks) => {
        if (!search) this.tasksList = tasks;
        else this.tasksList = tasks.filter((t) => t.title === search);
      });
  }

  deleteTask(id: string): void {
    this.taskService
      .delete(id)
      .pipe(
        catchError((e) => {
          alert('ocurrio un error');
          throw e;
        })
      )
      .subscribe((task) => {
        this.getTasks();
      });
  }
}
