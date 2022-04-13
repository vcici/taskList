import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-edit',
  templateUrl: './task-edit.component.html',
  styleUrls: ['./task-edit.component.css']
})
export class TaskEditComponent implements OnInit {

  public index:number = 0;
  public name:string = '';
  public urgency:string = '';

  constructor(private taskService:TaskService, 
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.index = this.route.snapshot.params['index'];
    const task = this.taskService.get(this.index);
    this.name = task.name;
    this.urgency = task.urgency;
  }
  public update(){
    this.taskService.update(this.index, this.name, this.urgency);
    this.router.navigate(["/"]);
  }

}
