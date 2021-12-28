import { TodoStatus } from "@/store/modules/todo/interfaces";

export const StyleStatus = {
  Open: "button-item__open-style",
  "In Progress": "button-item__in-progress-style",
  Canceled: "button-item__canceled-style",
  Completed: "button-item__completed-style",
};

export const formatStyleStatus = (status: TodoStatus): string => {
  return StyleStatus[status];
};
