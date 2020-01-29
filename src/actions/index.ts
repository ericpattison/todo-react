import { ITodoTask, VisibilityFilter } from "../types";

export const ADD_TODO = "ADD_TODO";
export interface IAddTodo {
    type: typeof ADD_TODO;
    id: number;
    text: string;
};

let nextId: number = 0;
export const addTodo = (text: string):IAddTodo => ({
   type:ADD_TODO,
   id: nextId++,
   text
});

export const TOGGLE_TODO = "TOGGLE_TODO";
export interface IToggleTodo {
    type: typeof TOGGLE_TODO;
    id: number
};
export const toggleTodo = (id: number):IToggleTodo => ({
    type: TOGGLE_TODO,
    id
});

export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export interface ISetVisibilityFilter {
    type: typeof SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
};
export const setVisibilityFilter = (filter: VisibilityFilter): ISetVisibilityFilter => ({
    type: SET_VISIBILITY_FILTER,
    filter
});

export type ActionData = IAddTodo | IToggleTodo | ISetVisibilityFilter;