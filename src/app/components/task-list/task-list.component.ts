import { Component } from '@angular/core';
import { Task, TaskService } from '../../services/task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {

  createdByTasks: Task[] = []
  assignedToTasks: Task[] = []

  constructor(
    private taskService: TaskService
  ){
    this.taskService.getCreatedBy().subscribe({
      next: (res) => {
      this.createdByTasks = res.allTasks
      console.log(this.createdByTasks)
      },
      error: () => alert("Error on fetching tasks!")
    })

    this.taskService.getAssignedTo().subscribe({
      next: (res) => {
      this.assignedToTasks = res.allTasks
      console.log(this.createdByTasks)
      },
      error: () => alert("Error on fetching tasks!")
    })
  }


}
