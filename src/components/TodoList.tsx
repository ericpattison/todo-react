import React from 'react';
import { TodoTaskList } from '../types';
import Todo from './Todo';

interface ITodoListProps {
    todos: TodoTaskList;
    toggleTodo: (id:number)=>void;
};

export default ({todos, toggleTodo}:ITodoListProps) => (
    <ul>
        {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={()=>toggleTodo(todo.id)} />
        ))}
    </ul>
);