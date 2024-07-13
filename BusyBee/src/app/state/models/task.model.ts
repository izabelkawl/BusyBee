export interface ITask {
  id: number;
  userId: number | null;
  statusId: number;
  title: string;
  description: string;
  updatedAt: Date;
}

export interface ITaskState {
    tasks: ITask[];
}
