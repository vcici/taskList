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
    taskService.load();
    this.tasks = taskService.tasks;
  }

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public addNewTask(name:HTMLInputElement, urgency:HTMLSelectElement){
    if (name.value!=''){
      this.taskService.add(name.value, urgency.value)
      name.value='';
      urgency.value='';
    }
  }

}
