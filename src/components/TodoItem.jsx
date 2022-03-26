import { AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import './TodoItem.css';

const TodoItem = ({todo, onDelete, onClickCheckedBtn, onEdit, onInsertToggle, onChangeSelectedTodo}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoItem">
            <div className={`contents ${checked ? 'checked' : ''}`}>
                {checked ? <AiOutlineCheckSquare size="25px" onClick={() => onClickCheckedBtn(id)} /> : <AiOutlineBorder size="25px" onClick={() => onClickCheckedBtn(id)} />}
                <div className="text">{text}</div>
            </div>
            <button className="edit" onClick={() => {
                onInsertToggle();
                onChangeSelectedTodo(todo);
                onEdit(id, text);
                }}>
                <FiEdit size="25px" />
            </button>
            <button onClick={() => 
                onDelete(id)
                }>
                <BsTrash size="25px" />
            </button>
        </div>
    );
}

export default TodoItem;