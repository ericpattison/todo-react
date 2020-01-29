import React from 'react';
import Footer from './Footer';
import { AddTodo, VisibleTodoList } from '../containers';

export default () => (
    <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
    </div>
)