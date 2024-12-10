export type TodoFilerT = 'completed' | 'uncompleted' | null;
export type TodoOrderT = 'asc' | 'desc';
export interface TodoStoreI {
  todos: TodoI[];
  search: string;
  filter: {
    order: TodoOrderT;
    completed: TodoFilerT;
  };
  isLoading: boolean;
}
