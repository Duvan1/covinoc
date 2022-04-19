import { Component, Input, OnInit } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { TasksService } from 'src/lib/services/tasks/tasks.service';

@Component({
  selector: 'app-tasks-listing',
  templateUrl: './tasks-listing.component.html',
  styleUrls: ['./tasks-listing.component.scss'],
})
export class TasksListingComponent implements OnInit {
  @Input() tasksList: any[] = [];
  pages: number = 1;
  
  constructor(private taskService: TasksService) {}

  ngOnInit(): void {
    this.getTasks();
  }

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
