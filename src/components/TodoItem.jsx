import { AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai';
import './TodoItem.css';

const TodoItem = ({todo, onDelete, onClickCheckedBtn}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoItem">
            <div className={`contents ${checked ? 'checked' : ''}`}>
                {checked ? <AiOutlineCheckSquare onClick={() => onClickCheckedBtn(id)} /> : <AiOutlineBorder onClick={() => onClickCheckedBtn(id)} />}
                <div className="text">{text}</div>
            </div>
            <button>수정</button>
            <button onClick={() => onDelete(id)}>삭제</button>
        </div>
    );
}

export default TodoItem;