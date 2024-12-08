import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todos = signal<TodoI[]>([
    {
      id: 0,
      isCompleted: false,
      title: 'groceries',
    },
    {
      id: 1,
      isCompleted: true,
      title: 'landry services',
    },
  ]);
  addTodo(todo: TodoI) {
    this.todos.update((prev) => {
      prev.push(todo);
      return prev;
    });
  }
  getTodos() {
    return this.todos();
  }
  loadTodos() {}
}
