import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprovedCounterComponent } from './improved-counter.component';

describe('ImprovedCounterComponent', () => {
  let component: ImprovedCounterComponent;
  let fixture: ComponentFixture<ImprovedCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImprovedCounterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprovedCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
