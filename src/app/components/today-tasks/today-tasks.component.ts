import {Component, OnInit} from '@angular/core';
import {TodayTasks} from "./mock.data";
import {TodayTaskInterface} from "./TodayTask.Interface";

@Component({
  selector: 'app-today-tasks',
  templateUrl: './today-tasks.component.html',
  styleUrls: ['./today-tasks.component.scss']
})
export class TodayTasksComponent implements OnInit {

 numberOfTodayTasks = TodayTasks.length;
 todayTasks: TodayTaskInterface[] = TodayTasks;


  constructor() {
  }



  ngOnInit(): void {
  }

}
