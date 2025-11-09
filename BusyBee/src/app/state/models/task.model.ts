export interface ITask {
  id: number;
  order: number;
  userId: number | null;
  fullName: string;
  statusId: number;
  title: string;
  description: string;
  updatedAt: Date;
}

export interface ITaskState {
  tasks: ITask[];
}
