import { useEffect, useState } from "react";
import './TodoInsert.css';
import {BsPlusLg} from 'react-icons/bs';

const TodoInsert = ({onInsertToggle, insertTodo, selectedTodo, onEdit}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        insertTodo(text);
        if(selectedTodo) {
            onEdit(selectedTodo.id, text);
        }
        setText('');
        onInsertToggle();
    }

    const onChange = (e) => {  
        setText(e.target.value);
    }

    useEffect(() => {
        if(selectedTodo) {
            setText(selectedTodo.text);
        }
    }, [selectedTodo])

    return (
        <form onSubmit={onSubmit} className="insertForm">
            <input value={text} onChange={onChange} />
            {selectedTodo ? (
                    <button type='submit' >수정</button>
                ) : (
                    <button type='submit' ><BsPlusLg /></button>
                )
            }
        </form>
    );
}

export default TodoInsert;