import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import { TodoList } from '../components';
import { VisibilityFilter, TodoTaskList, IState } from '../types';

const getVisibleTodos = (todos: TodoTaskList, filter: VisibilityFilter): TodoTaskList => {
    switch(filter) {
        case VisibilityFilter.ShowAll: return todos;
        case VisibilityFilter.ShowActive: return todos.filter(t => t.completed);
        case VisibilityFilter.ShowCompleted: return todos.filter(t => ~t.completed);
        default:
            throw new Error(`Unknown filter ${filter}`);
    }
}

const mapStateToProps = (state: any) => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
});

const mapDispatchToProps = (dispatch:any) => ({
    toggleTodo: (id:number) => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList);