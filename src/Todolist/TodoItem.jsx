function TodoItem({ todoData, completeAction, deleteAction }) {
  const { id, todo, status } = todoData;
  return (
    <li>
      {todo} :
      {(status && 'Complete') || (
        <button
          onClick={() => {
            completeAction(id);
          }}
        >
          Complete
        </button>
      )}{' '}
      <button
        onClick={() => {
          deleteAction(id);
        }}
      >
        Xóa
      </button>
    </li>
  );
}

export default TodoItem;
