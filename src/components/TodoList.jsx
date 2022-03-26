import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete}) => {
    return (
        <>
            <h1>여긴TodoList</h1>
            <div>{todos.map((todo, index) => <TodoItem key={index} todo={todo} onDelete={onDelete} />)}</div> 
        </>

    );
}

export default TodoList;