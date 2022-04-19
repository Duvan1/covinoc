import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { TasksService } from 'src/lib/services/tasks/tasks.service';

@Component({
  selector: 'app-tasks-header',
  templateUrl: './tasks-header.component.html',
  styleUrls: ['./tasks-header.component.scss'],
})
export class TasksHeaderComponent implements OnInit {
  @Output() taskCreated: EventEmitter<void> = new EventEmitter();
  model: any = {
    id: '1',
    createdAt: new Date(),
    state: false,
    title: '',
  };

  constructor(private taskService: TasksService) {}

  ngOnInit(): void {}

  createTask() {
    this.taskService
      .create(this.model)
      .pipe(
        catchError((e) => {
          alert('ocurrio un error');
          throw e;
        })
      )
      .subscribe((res) => {
        console.log(res);
        alert('Creado con éxito');
        this.taskCreated.emit();
      });
  }
}
