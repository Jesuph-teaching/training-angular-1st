import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
const url = 'https://jsonplaceholder.typicode.com/todos';
@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<TodoI[]>([]);
  http = inject(HttpClient);
  addTodo(todo: TodoI) {
    this.todos.update((prev) => {
      prev.push(todo);
      return prev;
    });
  }
  getTodos(): TodoI[] {
    return [
      {
        id: 0,
        userId: 0,
        completed: false,
        title: 'groceries',
      },
      {
        id: 1,
        userId: 1,
        completed: true,
        title: 'landry services',
      },
    ];
  }
  loadTodos() {
    return this.http.get<TodoI[]>(url, {
      headers: { Accept: 'application/json' },
    });
  }
}
