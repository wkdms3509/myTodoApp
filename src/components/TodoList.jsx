import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    return (
        <>
            <h1>여긴TodoList</h1>
            <div>{todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}</div> 
        </>

    );
}

export default TodoList;