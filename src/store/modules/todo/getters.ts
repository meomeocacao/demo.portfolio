import { TodoGetter, TodoState } from "./interfaces";

export const getters = {
  [TodoGetter.TODO_ITEMS]: (state: TodoState) => state.todoItems,
  [TodoGetter.TODO_ITEM_BY_ID]: (state: TodoState) => (id: string) => {
    return state.todoItems.find((todoItem) => todoItem.id === id);
  },
};
