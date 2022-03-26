import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import {AiFillEdit} from 'react-icons/ai';

let id = 4;
function App() {
  const [toggle, setToggle] = useState(false);
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "계획 1",
      checked: false
    },
    {
      id: 2,
      text: "계획 2",
      checked: true
    },
    {
      id: 3,
      text: "계획 3",
      checked: false
    }
  ]);

  const onInsertToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }

  const insertTodo = (value) => {
    const todo = {
      id: id++,
      text: value,
      checked: false
    }

    setTodos(todos.concat(todo));
  }

  const onDelete = (id) => {
    const todo = todos.filter(todo => todo.id !== id);
    setTodos(todo)
  }

  const onClickCheckedBtn = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, checked: !todo.checked} : todo))
  }

  console.log('test');

  return (
    <Home>
      <TodoList todos={todos} onDelete={onDelete} onClickCheckedBtn={onClickCheckedBtn} />
      <div><AiFillEdit onClick={() => onInsertToggle()} /></div>
      {toggle && <TodoInsert onInsertToggle={onInsertToggle} insertTodo={insertTodo} />}
    </Home>
  );
}

export default App;
