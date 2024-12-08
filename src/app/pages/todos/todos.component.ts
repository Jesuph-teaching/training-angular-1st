import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoComponent } from '../../components/todo/todo.component';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [TodoComponent],
  templateUrl: './todos.component.html',
  styles: ``,
})
export class TodosComponent implements OnInit {
  todosService = inject(TodosService);
  todos = signal<TodoI[]>([]);
  isLoading = signal<boolean>(false);
  ngOnInit(): void {
    this.isLoading.set(true);
    this.todosService
      .loadTodos()
      .pipe(
        catchError((err, _ca) => {
          console.error(err);
          this.isLoading.set(false);
          throw err;
        })
      )
      .subscribe((data) => {
        this.todos.set(data);
        this.isLoading.set(false);
      });
  }
  updateTodo(completed: boolean, todoId: number): void {
    console.log('called updateTodo');
    this.todos.update((prev) => {
      const todoIndex = prev.findIndex((todo) => todo.id === todoId);
      prev[todoIndex].completed = completed;
      return prev;
    });
  }
}
