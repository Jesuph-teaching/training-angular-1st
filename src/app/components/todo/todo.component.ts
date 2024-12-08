import { Component, input, output } from '@angular/core';
import { HighlightedDirective } from '../../directives/highlighted.directive';

@Component({
  selector: 'app-todo',
  imports: [HighlightedDirective],
  templateUrl: './todo.component.html',
  styles: ``,
})
export class TodoComponent {
  todo = input.required<TodoI>();
  updateTodo = output<boolean>();
  // @Output() updateTodo !:boolean;
  setCompleted(event: Event) {
    const completed = event.target
      ? (event.target as HTMLInputElement).checked
      : false;
    this.updateTodo.emit(completed);
  }
}

//

//https://github.com/Jesuph-teaching/training-angular-1st
