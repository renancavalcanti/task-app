import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export interface Task{
  assignedToName: string;
  assignedToUid: string;
  createdByName: string;
  createdByUid: string;
  description: string;
  done: boolean;
  taskUid: string;
}

export interface AllTasks{
  allTasks: Task[]
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(
    private http: HttpClient,
    private auth: AuthService
  ) { }

  getCreatedBy(): Observable<AllTasks>{
    return this.http.get<AllTasks>(
      "https://task-api-zxn6x.ondigitalocean.app/v1/tasks/createdby/",
    {headers: new HttpHeaders({'x-access-token': this.auth.getToken() || ''})});
  }

  getAssignedTo(): Observable<AllTasks>{
    return this.http.get<AllTasks>(
      "https://task-api-zxn6x.ondigitalocean.app/v1/tasks/assignedto/",
    {headers: new HttpHeaders({'x-access-token': this.auth.getToken() || ''})});
  }
  
}
