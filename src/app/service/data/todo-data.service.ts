import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';

@Injectable({
  providedIn: 'root',
})
export class TodoDataService {
  constructor(private http: HttpClient) {}

  retrieveAllTodos(username: any) {
    return this.http.get<Todo[]>(
      `http://localhost:8080/users/${username}/todos`
    );

    //return this.http.get('http://localhost:8080/hello-world-bean')

    //console.log("Execute Hello World BEAN Service")
  }
  deleteTodo(username: any, id: any) {
    return this.http.delete(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }

  retrieveTodo(username: any, id: any) {
    return this.http.get<Todo>(
      `http://localhost:8080/users/${username}/todos/${id}`
    );
  }
  updateTodo(username: any, id: any, todo: any) {
    return this.http.put(
      `http://localhost:8080/users/${username}/todos/${id}`,
      todo
    );
  }
}