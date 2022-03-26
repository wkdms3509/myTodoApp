import TodoItem from './TodoItem';
import './TodoList.css';

const TodoList = ({todos, onDelete, onClickCheckedBtn, onEdit, onInsertToggle, onChangeSelectedTodo}) => {
    return (
        <div className="TodoList">
            <h2>TodoList({todos.length})</h2>
            <div className="TodoList__item">
                {todos.map((todo, index) => 
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        onDelete={onDelete} 
                        onClickCheckedBtn={onClickCheckedBtn} 
                        onEdit={onEdit} 
                        onInsertToggle={onInsertToggle}
                        onChangeSelectedTodo={onChangeSelectedTodo} 
                        />
                    )
                }
            </div> 
        </div>

    );
}

export default TodoList;