export interface IStatus {
    id: number;
    order: number;
    name: string;
}

export interface IStatusState {
    statuses: IStatus[];
}
