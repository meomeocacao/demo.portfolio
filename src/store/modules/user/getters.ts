import { UserGetter, UserState } from "./interfaces";

export const getters = {
  [UserGetter.USER_ITEMS]: (state: UserState) => state.userItems,
  [UserGetter.USER_ITEM_BY_ID]: (state: UserState) => (id: string) => {
    return state.userItems.find((userItem) => userItem.id === id);
  },
  [UserGetter.USER_ITEM_BY_NAME]: (state: UserState) => (name: string) => {
    return state.userItems.find((userItem) => userItem.name === name);
  },
};
