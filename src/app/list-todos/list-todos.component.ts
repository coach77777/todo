import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {}
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css'],
})
export class ListTodosComponent implements OnInit {
  todos!: Todo[];

  message!: string;

  //NOTICE:: The " ! " This is because without it an error will appear-
  //due to

  // [
  //   new Todo(1, 'Learn to Dance', false, new Date()),
  //   new Todo(2,  'Expert at Angular',  false, new Date()),
  //   new Todo(3,  'Visit India', false, new Date())

  //   // { id: 1, description: 'Learn to Dance' },
  //   // { id: 2, description: 'Expert at Angular' },
  //   // { id: 3, description: },
  // ];

  // todo ={
  //   id : 1,
  //   description : 'Learn to Dance'
  // }

  constructor(
    private todoService: TodoDataService,
    private router : Router
    ) {}

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoService.retrieveAllTodos('in28minutes').subscribe((response) => {
      console.log(response);
      this.todos = response;
    });
  }

  deleteTodo(id: any) {
    console.log(` delete Todo ${id}`);
    this.todoService.deleteTodo('in28minutes', id).subscribe((response) => {
      console.log(response);
      this.message = `Delete of Todo ${id} Successful!`;
      this.refreshTodos();
    });
  }

  updateTodo(id:any) {
    console.log(` update ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo(){
    this.router.navigate(['todos', -1])
  }
}
