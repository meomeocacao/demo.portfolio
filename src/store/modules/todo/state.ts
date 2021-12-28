import { TodoState, TodoStatus } from "./interfaces";

export const state: TodoState = {
  todoItems: [
    {
      id: "asdzxczxc",
      title: "VueX4",
      todo: "Learn Store and Scale",
      start: new Date(),
      end: new Date(),
      status: TodoStatus.COMPLETED,
    },
    {
      id: "asdzxczxc2",
      title: "VueX4",
      todo: "Learn Store and Scale",
      start: new Date(),
      end: new Date(),
      status: TodoStatus.CANCELED,
    },
    {
      id: "asdzxczxc3",
      title: "VueX4",
      todo: "Learn Store and Scale",
      start: new Date(),
      end: new Date(),
      status: TodoStatus.IN_PROGRESS,
    },
    {
      id: "asdzxczxc4",
      title: "VueX4",
      todo: "Learn Store and Scale",
      start: new Date(),
      end: new Date(),
      status: TodoStatus.OPEN,
    },
  ],
};
