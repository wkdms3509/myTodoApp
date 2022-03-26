import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';

function App() {
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
  return (
    <Home>
      <TodoList />
    </Home>
  );
}

export default App;
