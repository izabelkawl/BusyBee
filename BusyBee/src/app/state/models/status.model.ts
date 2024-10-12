export interface IStatus {
    id: number;
    order: number;
    name: string;
    list: string[];
}

export interface IStatusState {
    statuses: IStatus[];
}
