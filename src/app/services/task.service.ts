import { EventEmitter, Injectable } from '@angular/core';
import { Task } from 'src/app/models/TaskModel';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasks:Task[]=[];
  public onTasksChange = new EventEmitter();

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
    this.onTasksChange.emit();
  }

  public delete(index:number){
    this.tasks.splice(index,1);
    this.save();
    this.onTasksChange.emit();
  }

  public get(index:number){
    return this.tasks[index];
  }

  public update(index:number, name:string, urgency:string){
    this.tasks[index].name = name;
    this.tasks[index].urgency = urgency;
    this.save();
    this.onTasksChange.emit();
  }

  public getTaskCount(){
    return this.tasks.length;
  }

  public getTaskAccordingUrgency():number[]{
    let taskUrgencyArray:number[] = [0, 0, 0, 0];
    for (let task of this.tasks){
      if (task.urgency == 'skubu'){
        taskUrgencyArray[0] +=1;
      }
      if (task.urgency == 'neskubu'){
        taskUrgencyArray[1] +=1;
      }
      if (task.urgency == 'ypacskubu'){
        taskUrgencyArray[2] +=1;
      }
      if (task.urgency == 'rutininis'){
        taskUrgencyArray[3] +=1;
      }
    }
    return taskUrgencyArray;
  }
}
