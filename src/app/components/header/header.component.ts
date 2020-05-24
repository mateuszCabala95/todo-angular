import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = 'Mateusz'
  amountOfTasks = 3;
  doneTasks = 1;

  doneTasksInPercent = ((this.doneTasks / this.amountOfTasks) * 100);


  constructor() {
  }

  ngOnInit(): void {
  }

}
