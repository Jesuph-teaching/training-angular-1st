import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-improved-counter',
  imports: [],
  templateUrl: './improved-counter.component.html',
  styles: ``,
})
export class ImprovedCounterComponent {
  counter = signal<number>(0);
  doubleCounter = computed(() => this.counter() * 2);
  increment() {
    this.counter.update((prev) => prev + 1);
    // this.counter.set(this.counter()+1);
  }
  decrement() {
    this.counter.update((prev) => prev - 1);
  }
}
