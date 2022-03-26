import { AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai';
import './TodoItem.css';

const TodoItem = ({todo}) => {
    const {text, checked} = todo;

    return (
        <div className="TodoItem">
            <div className={`contents ${checked}`}>
                {checked ? <AiOutlineCheckSquare /> : <AiOutlineBorder/>}
            </div>
            <div className="text">{text}</div>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

export default TodoItem;