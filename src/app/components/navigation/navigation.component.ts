import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public taskCount:number=0;
  public skubuCount:number=0;
  public neskubuCount:number=0;
  public ypacSkubuCount:number=0;
  public rutininisCount:number=0;

  constructor(private taskService:TaskService) { 
    this.taskCount=this.taskService.getTaskCount();
    this.skubuCount = this.taskService.getTaskAccordingUrgency()[0];
    this.neskubuCount = this.taskService.getTaskAccordingUrgency()[1];
    this.ypacSkubuCount = this.taskService.getTaskAccordingUrgency()[2];
    this.rutininisCount = this.taskService.getTaskAccordingUrgency()[3];
    this.taskService.onTasksChange.subscribe(()=>{
      this.taskCount=this.taskService.getTaskCount();
      this.skubuCount = this.taskService.getTaskAccordingUrgency()[0];
      this.neskubuCount = this.taskService.getTaskAccordingUrgency()[1];
      this.ypacSkubuCount = this.taskService.getTaskAccordingUrgency()[2];
      this.rutininisCount = this.taskService.getTaskAccordingUrgency()[3];
    });
    
  }

  ngOnInit(): void {
  }

}
