import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => {
      return import('./pages/home/home.component').then(
        (imported) => imported.HomeComponent
      );
    },
  },
  {
    path: 'todos',
    loadComponent: () => {
      return import('./pages/todos/todos.component').then(
        (imported) => imported.TodosComponent
      );
    },
  },
  {
    path: 'todos-table',
    loadComponent: () => {
      return import('./pages/todo-table/todo-table.component').then(
        (imported) => imported.TodoTableComponent
      );
    },
  },
  {
    path: 'todos-store',
    loadComponent: () => {
      return import('./pages/todos-store/todos-store.component').then(
        (imported) => imported.TodosStoreComponent
      );
    },
  },
  {
    path: '**',
    loadComponent: () => {
      return import('./pages/not-found/not-found.component').then(
        (imported) => imported.NotFoundComponent
      );
    },
  },
];
