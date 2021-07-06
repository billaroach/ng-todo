import {Input, Component, OnInit } from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  flag: boolean = false;
  updatedTitle: string = "";
  faTrashAlt = faTrashAlt;
  faSyncAlt = faSyncAlt;
  faCheckCircle = faCheckCircle;
  @Input() public todo: Todo = {
    id: 0,
    title: "",
    completed: false
  }
  @Input() public index: number = 0

  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
  }
  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  changeTodo(id: number) {
    this.todosService.changeTodo(id, this.updatedTitle);
    this.updatedTitle = ''
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  changeFlag() {
    this.flag = !this.flag;
  }
}
