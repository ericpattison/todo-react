import React from 'react';
import {FilterLink} from '../containers';
import {VisibilityFilter} from '../types';

export default () => (
    <div>
        <span>Show: </span>
        <FilterLink filter={VisibilityFilter.ShowAll}>All</FilterLink>
        <FilterLink filter={VisibilityFilter.ShowActive}>Active</FilterLink>
        <FilterLink filter={VisibilityFilter.ShowCompleted}>Completed</FilterLink>
    </div>
)