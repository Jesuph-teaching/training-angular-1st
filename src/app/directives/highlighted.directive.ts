import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]',
  standalone: true,
})
export class HighlightedDirective {
  isHighlighted = input(false);
  elm = inject(ElementRef<Element>);
  styleEffect = effect(() => {
    if (this.isHighlighted()) {
      this.elm.nativeElement.classList.add('text-cyan-800');
    } else {
      this.elm.nativeElement.classList.remove('text-cyan-800');
    }
  });
}
