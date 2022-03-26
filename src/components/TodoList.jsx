import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete, onClickCheckedBtn}) => {
    return (
        <>
            <h1>TodoList</h1>
            <div>{todos.map((todo, index) => <TodoItem key={index} todo={todo} onDelete={onDelete} onClickCheckedBtn={onClickCheckedBtn} />)}</div> 
        </>

    );
}

export default TodoList;