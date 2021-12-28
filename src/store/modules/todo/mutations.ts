import { TodoMutations, TodoState, TodoItem, UpdateTodo } from "./interfaces";

export const mutations = {
  [TodoMutations.UPDATE](state: TodoState, payload: TodoItem) {
    state.todoItems.push(payload);
  },
  [TodoMutations.SET](state: TodoState, payload: TodoItem[]) {
    state.todoItems = payload;
  },

  [TodoMutations.GET](state: TodoState) {
    return state.todoItems;
  },

  [TodoMutations.PATCH](state: TodoState, payload: UpdateTodo) {
    const { id, body } = payload;
    const index = state.todoItems.findIndex((item) => (item.id = id));
    state.todoItems[index].title = body.title || state.todoItems[index].title;
    state.todoItems[index].todo = body.todo || state.todoItems[index].todo;
    state.todoItems[index].status =
      body.status || state.todoItems[index].status;
  },
};
