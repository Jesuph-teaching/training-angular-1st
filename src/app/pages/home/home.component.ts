import { Component, OnInit, signal } from '@angular/core';
import { GreetingComponent } from '../../components/greeting/greeting.component';
import { CounterComponent } from '../../components/counter/counter.component';
import { ImprovedCounterComponent } from '../../components/improved-counter/improved-counter.component';
import { BasicInputComponent } from '../../components/basic-input/basic-input.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent, CounterComponent, ImprovedCounterComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  searchInput = '';
  ngOnInit(): void {
    console.log('this component has been initialized');
  }
  handleChange(event: Event) {
    this.searchInput = event.target
      ? (event.target as HTMLInputElement).value
      : '';
  }
}

export const x = 2131;
