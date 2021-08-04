const TodoItemList = ({ id, title, completed, deleteTodo, setTodoStatus }) => {
  const onHandleClick = () => {
    deleteTodo(id)
  }

  const onHandleChange = e => {
    const action = e.target.checked
    setTodoStatus(action, id)
  }
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{title}</td>
      <td>
        <input type='checkbox' checked={completed} onChange={onHandleChange} />
      </td>
      <td>
        <button className='btn btn-danger' onClick={onHandleClick}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}
export default TodoItemList
