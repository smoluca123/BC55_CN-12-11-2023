import { useState } from 'react';
import TodoItem from './TodoItem';

function Todolist() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (id, todo, status = false) => {
    setTodos([...todos, { id, todo, status }]);
  };
  const handleComplete = (id) => {
    const todo = todos.find((todo) => todo.id === id);
    todo.status = true;
    const newTodos = [...todos.filter((todo) => todo.id !== id), todo];
    setTodos(newTodos.sort((todo, prev) => todo.id - prev.id));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          onClick={() => {
            handleAddTodo(todos.length, input);
          }}
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo, index) => {
          return (
            <TodoItem
              key={index}
              todoData={todo}
              completeAction={handleComplete}
              deleteAction={handleDelete}
            />
          );
        }) || 'Empty Todo List'}
      </ul>
    </div>
  );
}
export default Todolist;
