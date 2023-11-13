import { useState } from 'react';
import '../../node_modules/font-awesome/css/font-awesome.css';
import './style.css';
import TodoItem from './TodoItem';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy milk', completed: true },
    { id: 2, title: 'Learn React', completed: false },
  ]);
  const [inputTask, setInputTask] = useState('');
  const [currentTime, setCurrentTime] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);
  const [idTodo, setIdTodo] = useState('');

  const date = new Date();
  const getTime = () => {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    setCurrentTime(
      `${hours}:${minutes}:${seconds} ${hours >= 12 ? 'PM' : 'AM'}`
    );
  };
  const currentDate = `Ngày ${date.getDate()} Tháng ${
    date.getMonth() + 1
  } Năm ${date.getFullYear()}`;
  setTimeout(getTime, 1000);
  const handleAddTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, title: inputTask, completed: false },
    ]);
    setInputTask('');
  };
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleCompletedTodo = (id) => {
    const newTodos = [...todos];
    const indexTodo = todos.findIndex((todo) => todo.id === id);
    newTodos[indexTodo].completed = !newTodos[indexTodo].completed;
    setTodos(newTodos);
  };
  const handleEditTodo = (id) => {
    const indexTodo = todos.findIndex((todo) => todo.id === id);
    setInputTask(todos[indexTodo].title);
    setIsUpdating(true);
    setIdTodo(id);
  };
  const handleUpdateTodo = () => {
    const indexTodo = todos.findIndex((todo) => todo.id === idTodo);
    const newTodos = [...todos];
    newTodos[indexTodo].title = inputTask;
    setTodos(newTodos);
    setInputTask('');
    setIsUpdating(false);
  };

  return (
    <div className="card">
      <div className="card__header">
        <img src="./img/X2oObC4.png" />
      </div>
      <div className="card__body">
        <div className="filter-btn">
          <a id="one" href="#">
            <i className="fa fa-check-circle" />
          </a>
          <a id="two" href="#">
            <i className="fa fa-sort-alpha-down" />
          </a>
          <a id="three" href="#">
            <i className="fa fa-sort-alpha-up" />
          </a>
          <a id="all" href="#">
            <i className="fa fa-clock" />
          </a>
          <span className="toggle-btn">
            <i className="fa fa-filter" />
            <i className="fa fa-times" />
          </span>
        </div>
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p id="date-now">
              {currentDate} - {currentTime}
            </p>
          </div>
          <div className="card__add">
            <input
              id="newTask"
              type="text"
              value={inputTask}
              onInput={(e) => {
                setInputTask(e.target.value);
              }}
              placeholder="Enter an activity..."
            />
            <div id="buttons__event">
              {isUpdating ? (
                <button
                  id="updateItem"
                  onClick={() => {
                    handleUpdateTodo();
                  }}
                >
                  <i className="fa fa-save" />
                </button>
              ) : (
                <button id="addItem" onClick={handleAddTodo}>
                  <i className="fa fa-plus" />
                </button>
              )}
            </div>
          </div>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo" style={{ paddingLeft: 0 }}>
              {todos
                .filter((todo) => !todo.completed)
                .map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      task={todo}
                      handleRemove={handleDeleteTodo}
                      handleCompleted={handleCompletedTodo}
                      handleEditTodo={handleEditTodo}
                    />
                  );
                })}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {todos
                .filter((todo) => todo.completed)
                .map((todo) => {
                  return (
                    <TodoItem
                      key={todo.id}
                      task={todo}
                      handleRemove={handleDeleteTodo}
                      handleCompleted={handleCompletedTodo}
                      handleEditTodo={handleEditTodo}
                    />
                  );
                })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
