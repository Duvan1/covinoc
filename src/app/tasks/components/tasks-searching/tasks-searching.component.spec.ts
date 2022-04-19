import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksSearchingComponent } from './tasks-searching.component';

describe('TasksSearchingComponent', () => {
  let component: TasksSearchingComponent;
  let fixture: ComponentFixture<TasksSearchingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksSearchingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksSearchingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
