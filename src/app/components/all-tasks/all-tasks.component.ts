import { Component, OnInit } from '@angular/core';
import {TasksInterface} from "../task-folder/Tasks.Interface";
import {Tasks} from "../task-folder/mock.data";

@Component({
  selector: 'app-all-tasks',
  templateUrl: './all-tasks.component.html',
  styleUrls: ['./all-tasks.component.scss']
})
export class AllTasksComponent implements OnInit {

  takskData: TasksInterface[] = Tasks

  constructor() { }

  ngOnInit(): void {
  }

}
