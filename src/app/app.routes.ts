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
    path: '**',
    loadComponent: () => {
      return import('./pages/not-found/not-found.component').then(
        (imported) => imported.NotFoundComponent
      );
    },
  },
];
