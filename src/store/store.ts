import { createStore } from "vuex";
import { todoModules, TodoState } from "./modules/todo/export";
import { userModules } from "./modules/user";
export interface RootState {
  todo: TodoState;
}

export default createStore({
  modules: { todoModules, userModules },
});
