import { RootState } from "@/store";
import { ActionContext } from "vuex";
import { UserActions, UserItem, UserState, UserMutations } from "./interfaces";

export const actions = {
  [UserActions.ADD](
    { commit }: ActionContext<UserState, RootState>,
    payload: UserItem
  ) {
    commit(UserMutations.UPDATE, payload);
    commit(UserMutations.GET);
  },

  [UserActions.GET]({ commit }: ActionContext<UserState, RootState>) {
    commit(UserMutations.GET);
  },

  [UserActions.SET](
    { commit }: ActionContext<UserState, RootState>,
    payload: UserItem[]
  ) {
    commit(UserMutations.SET, payload);
  },
};
