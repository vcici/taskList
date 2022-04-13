import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task[]=[];

  constructor(private taskService:TaskService) {
    this.tasks = taskService.tasks;
  }

  ngOnInit(): void {
  }

}
