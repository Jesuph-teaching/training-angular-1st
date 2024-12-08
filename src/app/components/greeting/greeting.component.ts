import {
  Component,
  input,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.component.html',
})
export class GreetingComponent implements OnChanges {
  name = input.required();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happened');
    console.log(changes['name']);
  }
}
