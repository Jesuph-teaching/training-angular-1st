import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { TodoFilerT, TodoOrderT, type TodoStoreI } from './todo.model';
import { computed, effect } from '@angular/core';
import { interval, timeout, timer } from 'rxjs';
const TodoStorageKey = 'ngrx-Todo';
const initialValue: TodoStoreI = {
  todos: [],
  search: '',
  filter: {
    order: 'asc',
    completed: null,
  },
  isLoading: false,
};
export const TodoStore = signalStore(
  {
    providedIn: 'root',
  },
  withState(initialValue),
  withMethods((store) => ({
    updateTodo(todoId: number, isCompleted: boolean) {
      patchState(store, (state) => {
        const todoIndex = state.todos.findIndex((todo) => todo.id === todoId);
        state.todos[todoIndex].completed = isCompleted;
        return { todos: [...state.todos] };
      });
    },
    updateFilter(filter: TodoFilerT) {
      patchState(store, (state) => ({
        filter: {
          completed: filter,
          order: (state.filter.completed
            ? state.filter.order === 'asc'
              ? 'desc'
              : 'asc'
            : 'asc') as TodoOrderT,
        },
        todos: state.todos.reverse(),
      }));
    },
    addTodo(title: string) {
      patchState(store, (state) => {
        state.todos.push({
          id: Math.floor(Math.random() * 100000),
          title,
          completed: false,
          userId: 1,
        });
        return { todos: [...state.todos] };
      });
    },
  })),
  withComputed(({ todos, filter }) => ({
    completedCount: computed(() => {
      return todos().filter((todo) => todo.completed).length;
    }),
    filteredTodos: computed(() => {
      if (filter().completed === null) return todos();
      if (filter().completed === 'completed')
        return todos().filter((todo) => todo.completed);
      return todos().filter((todo) => !todo.completed);
    }),
  })),
  withHooks({
    onInit(store) {
      console.log('onInit called');
      const initialValue = localStorage.getItem(TodoStorageKey);
      if (initialValue) {
        patchState(store, () => ({
          todos: (JSON.parse(initialValue) as TodoI[]) || [],
        }));
      }
      watchState(store, (state) => {
        console.count('state changed');
      });
      effect(() => {
        const state = getState(store);
        console.count('effect changed');
        localStorage.setItem(TodoStorageKey, JSON.stringify(state.todos));
      });
      patchState(store, () => ({ isLoading: true }));
      timer(2000).subscribe(() => {
        patchState(store, () => ({ isLoading: false }));
      });
    },
  })
);
