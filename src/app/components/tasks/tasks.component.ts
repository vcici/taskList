import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  public tasks:Task[]=[];

  constructor() {
    let data=localStorage.getItem("tasks");
    if (data!=null){
      this.tasks=JSON.parse(data);
    }
  }

  ngOnInit(): void {
  }

  private save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public addNewTask(name:HTMLInputElement, urgency:HTMLSelectElement){
    if (name.value!=''){
      this.tasks.push({
        name  : name.value,
        urgency : urgency.value
      });
      name.value='';
      urgency.value='';
      this.save();
    }
  }

  public removeTask(i:number){
    this.tasks.splice(i, 1);
    this.save();
  }

}
