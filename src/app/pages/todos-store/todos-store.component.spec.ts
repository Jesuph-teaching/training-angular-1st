import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodosStoreComponent } from './todos-store.component';

describe('TodosStoreComponent', () => {
  let component: TodosStoreComponent;
  let fixture: ComponentFixture<TodosStoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodosStoreComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodosStoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
