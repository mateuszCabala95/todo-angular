import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-task-folder',
  templateUrl: './task-folder.component.html',
  styleUrls: ['./task-folder.component.scss']
})
export class TaskFolderComponent implements OnInit {

  @Input() color;
  @Input() icon;
  @Input() title;
  @Input() taskAmount;





  constructor() { }

  ngOnInit(): void {
  }

}
