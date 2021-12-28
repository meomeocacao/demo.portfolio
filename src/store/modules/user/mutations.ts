import { UserItem, UserMutations, UserState } from "./interfaces";

export const mutations = {
  [UserMutations.UPDATE](state: UserState, payload: UserItem) {
    state.userItems.push(payload);
  },
  [UserMutations.SET](state: UserState, payload: UserItem[]) {
    state.userItems = payload;
  },

  [UserMutations.GET](state: UserState) {
    return state.userItems;
  },
};
