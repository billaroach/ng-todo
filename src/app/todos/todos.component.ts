import {Input, Component, OnInit} from '@angular/core';
import {Todo, TodosService} from "../shared/todos.service";
import {faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import {delay} from "rxjs/operators";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  faCircleNotch = faCircleNotch;
  public loading: boolean = true;



  constructor(public todosService: TodosService) { }

  ngOnInit(): void {
    this.todosService.fetchTodos()
      .pipe(delay(2000))
      .subscribe(() => {
      this.loading = false;
    })
  }



}
