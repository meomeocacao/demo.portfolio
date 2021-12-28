export enum UserStatus {
  OPEN = "Open",
  FREE_LANCER = "Free Lancer",
}

export interface UserItem {
  id: string;
  name: string;
  image: string;
  birthDate: Date;
  introduction: string;
  contact: Contact;
  exp: Exp[];
  certificate: Certificate[];
}

export interface Contact {
  email: string;
  phone: string;
}

export interface Certificate {
  title: string;
  content: string;
  receivedAt: Date;
  image: string;
  priority?: boolean;
}

export interface Exp {
  job: string;
  start: Date;
  company: string;
  location: string;
  position: string;
  projects: Project[];
  leave?: Date;
}

export interface Project {
  title: string;
  content: string;
  technology: string[];
  type: string;
}

export interface UserState {
  userItems: UserItem[];
}

export enum UserActions {
  ADD = "addUserItem",
  GET = "setUserItems",
  SET = "getUserItems",
  PATCH = "patchUserItems",
}

export enum UserMutations {
  SET = "setUserItems",
  UPDATE = "updateUserItems",
  GET = "getUserItems",
  PATCH = "patchUserItems",
}

export enum UserGetter {
  USER_ITEMS = "UserItems",
  USER_ITEM_BY_ID = "UserItemById",
  USER_ITEM_BY_NAME = "UserItemByName",
}
