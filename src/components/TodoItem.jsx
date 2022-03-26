import { AiOutlineCheckSquare, AiOutlineBorder } from 'react-icons/ai'

const TodoItem = ({todo}) => {
    const {text, checked} = todo;

    return (
        <div>
            <div className={`content ${checked}`}>
                {checked ? <AiOutlineCheckSquare /> : <AiOutlineBorder/>}
            </div>
            <div>{todo.text}</div>
            <button>수정</button>
            <button>삭제</button>
        </div>
    );
}

export default TodoItem;