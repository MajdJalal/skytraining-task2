import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UpperCasePipe } from '@angular/common';
import { HighlightPipe } from '../pipes/highlight.pipe';
@Component({
  selector: 'app-task-manager',
  standalone: true,
  imports: [FormsModule, UpperCasePipe, HighlightPipe],
  templateUrl: './task-manager.component.html',
  styleUrl: './task-manager.component.css'
})
export class TaskManagerComponent {
  userName : string = "";
  softwareName :string = "Sky Task Manager";
  userNameStyle : string = "bg-success"
  newTaskName : string = "";
  newTaskPriority : string = "";
  searchTerm : string = "";
  tasks : { name: string; priority: string }[]= [
    {name : "study for the exam" , priority : "2"},
    {name : "solve the assignment", priority: "3"}
  ];

  addTask() {
    this.tasks.push(
      {name : this.newTaskName, priority: this.newTaskPriority}
    );
  }

}
