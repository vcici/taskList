import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() public task:Task={name:"",urgency:""};;
  @Input() public index:number=0;

  constructor(private taskService:TaskService) { }

  ngOnInit(): void {
  }
  public deleteTask(){
    this.taskService.delete(this.index);
  }

}
