import {
  Component,
  Input,
  input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-basic-input',
  imports: [],
  templateUrl: './basic-input.component.html',
})
export class BasicInputComponent {
  @Input({ required: true }) search: string = '';
  handleChange(event: Event) {
    this.search = event.target ? (event.target as HTMLInputElement).value : '';
  }
}
