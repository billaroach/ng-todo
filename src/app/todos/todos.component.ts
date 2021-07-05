import { Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  public loading: boolean = true;
  public flag: boolean = false;
  public updatedTitle: string = ""
  public selectedValue: string = ""


  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos().subscribe(() => {
      this.loading = false;
    })
  }

  onChange(id: number) {
    this.todosService.onToggle(id);
  }

  changeTodo() {
    this.todosService.changeTodo(parseInt(this.selectedValue), this.updatedTitle);
  }

  removeTodo(id: number) {
    this.todosService.removeTodo(id);
  }

  changeFlag() {
    this.flag = !this.flag;
  }

}
