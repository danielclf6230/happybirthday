export function TodoItem({completed, id, title, toggleTodo, deleteTodo}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          //e.target.checked determine the check box True/False
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      <button
        //Pass a function, if no () is pass a result
          onClick={() => deleteTodo(id)}
        className="btn btn-danger"
      >
        Delete
      </button>
    </li>
  );
}
