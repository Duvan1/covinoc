import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { TasksHeaderComponent } from './components/tasks-header/tasks-header.component';
import { TasksSearchingComponent } from './components/tasks-searching/tasks-searching.component';
import { TasksListingComponent } from './components/tasks-listing/tasks-listing.component';
import { TasksPaginationComponent } from './components/tasks-pagination/tasks-pagination.component';
import { TaskRoutingModule } from './task-routing.module';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TasksComponent,
    TasksHeaderComponent,
    TasksSearchingComponent,
    TasksListingComponent,
    TasksPaginationComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    FormsModule,
    NgxPaginationModule
  ]
})
export class TasksModule { }
