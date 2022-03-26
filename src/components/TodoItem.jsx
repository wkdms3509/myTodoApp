import { AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai';
import { BsBookmarkCheckFill, BsTrash } from 'react-icons/bs';
import { FiEdit } from 'react-icons/fi';
import './TodoItem.css';

const TodoItem = ({todo, onDelete, onClickCheckedBtn}) => {
    const {id, text, checked} = todo;

    return (
        <div className="TodoItem">
            <div className={`contents ${checked ? 'checked' : ''}`}>
                {checked ? <AiOutlineCheckSquare size="25px" onClick={() => onClickCheckedBtn(id)} /> : <AiOutlineBorder size="25px" onClick={() => onClickCheckedBtn(id)} />}
                <div className="text">{text}</div>
            </div>
            <button className="edit"><FiEdit size="25px" /></button>
            <button onClick={() => onDelete(id)}><BsTrash size="25px" /></button>
            {/* <button><BsBookmarkCheckFill size="25px" /></button> */}
        </div>
    );
}

export default TodoItem;