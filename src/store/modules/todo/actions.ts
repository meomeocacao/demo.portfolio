import { RootState } from "@/store";
import { ActionContext } from "vuex";
import {
  TodoActions,
  TodoState,
  TodoItem,
  TodoMutations,
  UpdateTodo,
} from "./interfaces";

export const actions = {
  [TodoActions.ADD](
    { commit }: ActionContext<TodoState, RootState>,
    payload: TodoItem
  ) {
    commit(TodoMutations.UPDATE, payload);
    commit(TodoMutations.GET);
  },

  [TodoActions.GET]({ commit }: ActionContext<TodoState, RootState>) {
    commit(TodoMutations.GET);
  },

  [TodoActions.SET](
    { commit }: ActionContext<TodoState, RootState>,
    payload: TodoItem[]
  ) {
    commit(TodoMutations.SET, payload);
  },

  [TodoActions.PATCH](
    { commit }: ActionContext<TodoState, RootState>,
    payload: UpdateTodo
  ) {
    commit(TodoMutations.PATCH, payload);
    commit(TodoMutations.GET);
  },
};
