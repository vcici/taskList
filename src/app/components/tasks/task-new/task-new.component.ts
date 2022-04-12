import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-new',
  templateUrl: './task-new.component.html',
  styleUrls: ['./task-new.component.css']
})
export class TaskNewComponent implements OnInit {

  constructor(private taskService:TaskService, private router:Router) { }

  ngOnInit(): void {
  }

  public addNewTask(name:HTMLInputElement, urgency:HTMLSelectElement){
    if (name.value!=''){
      this.taskService.add(name.value, urgency.value)
      name.value='';
      urgency.value='';
      this.router.navigate(['/']);
    }
  }

}
