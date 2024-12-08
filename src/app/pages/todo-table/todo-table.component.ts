import { Component, inject, OnInit, signal } from '@angular/core';
import { DynamicTableComponent } from '../../components/dynamic-table/dynamic-table.component';
import { TodosService } from '../../services/todos.service';
import { catchError } from 'rxjs';
import { ColumnDef, PaginationState } from '@tanstack/angular-table';

@Component({
  selector: 'app-todo-table',
  imports: [DynamicTableComponent],
  templateUrl: './todo-table.component.html',
  styles: ``,
})
export class TodoTableComponent implements OnInit {
  todosService = inject(TodosService);
  todos = signal<TodoI[]>([]);
  isLoading = signal<boolean>(false);
  pagination = signal<PaginationState>({
    pageIndex: 0,
    pageSize: 5,
  });

  columns: ColumnDef<TodoI>[] = [
    {
      accessorKey: 'id',
      header: 'ID',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'title',
      id: 'lastName',
      cell: (info) => info.getValue(),
    },
    {
      accessorKey: 'completed',
      id: 'completed',
      cell: (info) => (info.getValue() ? 'completed' : 'not yet'),
    },
  ];
  ngOnInit(): void {
    this.isLoading.set(true);
    this.todosService
      .loadTodos()
      .pipe(
        catchError((err, _ca) => {
          console.error(err);
          this.isLoading.set(false);
          throw err;
        })
      )
      .subscribe((data) => {
        this.todos.set(data);
        this.isLoading.set(false);
      });
  }
}
