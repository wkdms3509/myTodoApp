import { useState } from "react";

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

    return (
        <form onSubmit={onSubmit}>
            <input value={text} onChange={onChange} />
            <button type='submit'>추가</button>
        </form>
    );
}

export default TodoInsert;