export interface ITodoTask {
    id: number,
    text: string,
    completed: boolean
}

export enum VisibilityFilter {
    ShowAll = 'SHOW_ALL',
    ShowCompleted = 'SHOW_COMPLETED',
    ShowActive = 'SHOW_ACTIVE'
};

export type TodoTaskList = Array<ITodoTask>;

export interface IState {
    todos: TodoTaskList;
    filter: VisibilityFilter;
};