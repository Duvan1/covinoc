import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { BaseService } from '../base/base.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService extends BaseService {
  get(): Observable<any[]> {
    return this.http.get<any[]>(this.settings.get.covinacApi);
  }

  getById(taskId: string): Observable<any> {
    return this.http.get<any>(`${this.settings.get.covinacApi}/${taskId}`);
  }

  create(task: any): Observable<any> {
    return this.http.post(this.settings.get.covinacApi, task);
  }

  update(
    taskId: string,
    model: any,
  ): Observable<any> {
    return this.http.put(`${this.settings.get.covinacApi}/${taskId}`, model);
  }

  delete(taskId: string): Observable<any> {
    return this.http.delete(`${this.settings.get.covinacApi}/${taskId}`);
  }
}
