import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../../services/todos.service';
import { TodoComponent } from '../../components/todo/todo.component';
import { catchError } from 'rxjs';
import { TodoStore } from '../../stores/todo.store';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos-store',
  imports: [TodoComponent, FormsModule],
  templateUrl: './todos-store.component.html',
  styles: ``,
})
export class TodosStoreComponent {
  store = inject(TodoStore);
  todo_title = '';
  addTodo() {
    this.store.addTodo(this.todo_title);
    this.todo_title = '';
  }
}
