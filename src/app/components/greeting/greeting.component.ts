import { UpperCasePipe } from '@angular/common';
import { Component, input, OnChanges, SimpleChanges } from '@angular/core';
import { ReverseTextPipe } from '../../pipes/reverse-text.pipe';

@Component({
  selector: 'app-greeting',
  imports: [ReverseTextPipe],
  templateUrl: './greeting.component.html',
})
export class GreetingComponent implements OnChanges {
  name = input.required<string>();

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes happened');
    console.log(changes['name']);
  }
}
