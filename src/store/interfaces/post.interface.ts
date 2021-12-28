export enum PostStatus {
  TODO = "To do",
  IN_PROGRESS = "In progress",
  DONE = "Done",
  CANCELED = "canceled",
}

export interface PostInterface {
  title: string;
  content: string;
  createdAt: Date;
  start: Date;
  end: Date;
  status: PostStatus;
}
