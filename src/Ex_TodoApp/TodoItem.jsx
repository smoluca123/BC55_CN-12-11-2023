import React from 'react';

export default function TodoItem({
  task,
  handleRemove,
  handleCompleted,
  handleEditTodo,
}) {
  const { title, completed } = task;
  return (
    <li>
      <span>{title}</span>
      <div className="text-right">
        <span className="buttons" style={{ cursor: 'pointer' }}>
          <i className="fas fa-pencil-alt" />
        </span>
        <span
          className="buttons"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleRemove(task.id);
          }}
        >
          <i className="fa fa-trash" />
        </span>
        <span
          className="buttons"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleCompleted(task.id);
          }}
        >
          <i className="fa fa-check" />
        </span>
        <span
          className="buttons"
          style={{ cursor: 'pointer' }}
          onClick={() => {
            handleEditTodo(task.id);
          }}
        >
          <i className="fa fa-pencil"></i>
        </span>
      </div>
    </li>
  );
}
