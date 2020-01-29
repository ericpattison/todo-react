import {ActionData, TOGGLE_TODO, ADD_TODO, SET_VISIBILITY_FILTER} from '../actions';
import {IState, TodoTaskList, VisibilityFilter} from '../types';
import { combineReducers } from 'redux';

const todos = (state:TodoTaskList = [], action:ActionData): TodoTaskList => {
    switch(action.type) {
        case TOGGLE_TODO:
            return state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed}: todo);
        case ADD_TODO:
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ];
        default:
            return state;
    }
};

const visibilityFilter = (state: VisibilityFilter = VisibilityFilter.ShowAll, action: ActionData): VisibilityFilter => {
    switch(action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default combineReducers({
    todos,
    visibilityFilter
});