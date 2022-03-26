import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
    // const todolist = todos.map(todo => todo)
    return (
        <>
            <h1>여긴TodoList</h1>
            <div>{todos.map((todo, index) => <TodoItem key={index} todo={todo} />)}</div> 
            {/* <div><TodoItem /></div> */}
        </>

    );
}

export default TodoList;