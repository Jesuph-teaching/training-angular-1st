import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoComponent } from '../../components/todo/todo.component';

@Component({
  selector: 'app-todos',
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
  styles: ``,
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todos = signal<TodoI[]>([]);
  ngOnInit(): void {
    this.todos.set(this.todosService.getTodos());
  }
  updateTodo(isCompleted: boolean, todoId: number): void {
    console.log('called updateTodo');
    this.todos.update((prev) => {
      const todoIndex = prev.findIndex((todo) => todo.id === todoId);
      prev[todoIndex].isCompleted = isCompleted;
      return prev;
    });
  }
}
