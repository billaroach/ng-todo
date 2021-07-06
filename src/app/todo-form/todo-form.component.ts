import { Component, OnInit } from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";
import {faPlusSquare} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  title: string = ""
  faPlusSquare = faPlusSquare;

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }

  addTodo() {
    const todo: Todo = {
      title: this.title,
      id: Date.now(),
      completed: false,
    }
    this.todosService.addTodo(todo);
    this.title = ''
  }
}
