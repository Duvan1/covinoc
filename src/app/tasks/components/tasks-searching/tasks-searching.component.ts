import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tasks-searching',
  templateUrl: './tasks-searching.component.html',
  styleUrls: ['./tasks-searching.component.scss'],
})
export class TasksSearchingComponent implements OnInit {
  busqueda: string = '';
  @Output() buscar: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
}
