export enum TodoStatus {
  OPEN = "Open",
  IN_PROGRESS = "In Progress",
  CANCELED = "Canceled",
  COMPLETED = "Completed",
}

export interface TodoItem {
  id: string;
  title: string;
  todo: string;
  start: Date;
  end: Date;
  status: TodoStatus;
}

export interface UpdateTodo {
  id: string;
  body: UpdateItem;
}

export interface UpdateItem {
  title?: string;
  todo?: string;
  status?: TodoStatus;
}

export interface TodoState {
  todoItems: TodoItem[];
}

export enum TodoActions {
  ADD = "addTodoItem",
  GET = "setTodoItems",
  SET = "getTodoItems",
  PATCH = "patchTodoItems",
}

export enum TodoMutations {
  SET = "setTodoItems",
  UPDATE = "updateTodoItems",
  GET = "getTodoItems",
  PATCH = "patchTodoItems",
}

export enum TodoGetter {
  TODO_ITEMS = "todoItems",
  TODO_ITEM_BY_ID = "todoItemById",
}
