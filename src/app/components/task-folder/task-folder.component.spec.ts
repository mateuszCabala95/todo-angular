import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskFolderComponent } from './task-folder.component';

describe('TaskFolderComponent', () => {
  let component: TaskFolderComponent;
  let fixture: ComponentFixture<TaskFolderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskFolderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
