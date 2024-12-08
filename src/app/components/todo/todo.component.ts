import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styles: ``,
})
export class TodoComponent {
  todo = input.required<TodoI>();
  updateTodo = output<boolean>();
  // @Output() updateTodo !:boolean;
  setCompleted(event: Event) {
    const isCompleted = event.target
      ? (event.target as HTMLInputElement).checked
      : false;
    this.updateTodo.emit(isCompleted);
  }
}

// https://jsonplaceholder.typicode.com/todos
