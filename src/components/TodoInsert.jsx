import { useEffect, useState } from "react";
import './TodoInsert.css';
import {BsPlusLg} from 'react-icons/bs';

const TodoInsert = ({onInsertToggle, insertTodo}) => {
    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        insertTodo(text);
        setText('');
        onInsertToggle();
    }

    const onChange = (e) => {  
        setText(e.target.value);
    }

    useEffect(() => {
        
    })

    return (
        <form onSubmit={onSubmit} className="insertForm">
            <input value={text} onChange={onChange} />
            <button className="button" type='submit'><BsPlusLg size="20px" /></button>
        </form>
    );
}

export default TodoInsert;