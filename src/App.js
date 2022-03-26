import { useState } from 'react';
import './App.css';
import Home from './components/Home';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import {AiFillEdit} from 'react-icons/ai';

let id = 4;
function App() {
  const [selectedTodo, setSelectedTodo] = useState(null);
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

  const Today = () => {
    const week = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];
    let now = new Date();
    let todayYear = now.getFullYear();
    let todayMonth = now.getMonth() + 1;
    let todayDate = now.getDate();
    let dayOfWeek = week[now.getDay()];
    let hours = now.getHours();
    let minutes = now.getMinutes();
    // const time = `${todayYear}년 ${todayMonth}월 ${todayDate}일 ${dayOfWeek} ${hours}:${minutes}`;

    return (
      `${todayYear}년 ${todayMonth}월 ${todayDate}일 ${dayOfWeek} ${hours}:${minutes}`
    )
  }

  const onChangeSelectedTodo = (todo) => {
    setSelectedTodo(todo);
  }

  const onEdit = (id, value) => {
    setTodos(todos => todos.map(todo => todo.id === id ? {...todo, text: value} : todo))
  }

  return (
    <>
      <Home className="Home" Today={Today}>
        {/* toggle이 true일 때 TodoInsert 창 켜짐 */}
        {toggle && <TodoInsert 
            onInsertToggle={onInsertToggle} 
            insertTodo={insertTodo} 
            onEdit={onEdit} 
            selectedTodo={selectedTodo} 
          />
        }

        {/* todo list 목록 보여줌 */}
        <TodoList 
          todos={todos} 
          onDelete={onDelete} 
          onClickCheckedBtn={onClickCheckedBtn} 
          onEdit={onEdit} 
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo} 
        />

        {/* todo 추가 버튼. 클릭 시 토글 창 켜짐 */}
        <div className="addItemBtn"><AiFillEdit size="25px" onClick={() => onInsertToggle()} /></div>
      </Home>
    </>
  );
}

export default App;
