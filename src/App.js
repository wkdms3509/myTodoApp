import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import {AiFillEdit} from 'react-icons/ai';

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

  return (
    <Home>
      <TodoList todos={todos} />
      <div><AiFillEdit onClick={() => onInsertToggle()} /></div>
      {toggle && <TodoInsert />}
    </Home>
  );
}

export default App;
