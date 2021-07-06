import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";


export interface Todo {
  id: number,
  title: string,
  completed: boolean,
}
@Injectable({providedIn: 'root'})
export class TodosService {
  public todos: Todo[] = [];

  constructor(private http: HttpClient) {
  }

  fetchTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .pipe(tap(todos => this.todos = todos))

  }

  onToggle(id: number) {
    const index = this.todos.findIndex(t => t.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  changeTodo(id: number, title: string) {
    let foundIndex = this.todos.findIndex(x => x.id == id);
    this.todos[foundIndex].title = title;
  }

  removeTodo(id: number) {
    this.todos = this.todos.filter(t => t.id !== id);
  }
}
