import { Injectable } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks:Task[]=[];

  constructor() { }

  public load(){
    let data=localStorage.getItem("tasks");
    if (data!=null){
      this.tasks=JSON.parse(data);
    }
  }
  public save(){
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  public add(name:string, urgency:string){
    this.tasks.push({
      name  : name,
      urgency : urgency
    });
    this.save();
  }

  public delete(index:number){
    this.tasks.splice(index,1);
    this.save();
  }
}
