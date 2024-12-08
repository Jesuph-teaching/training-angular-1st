import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverseText',
})
export class ReverseTextPipe implements PipeTransform {
  transform(value: string): unknown {
    return value.trim().split('').reverse().join('').toLocaleUpperCase();
  }
}
