import TodoItemList from './TodoItemList/TodoItemList'

const TodoList = ({ todos, deleteTodo, setTodoStatus }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Borrar</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, title, completed }) => (
          <TodoItemList
            id={id}
            key={`todo-${id}`}
            title={title}
            completed={completed}
            deleteTodo={deleteTodo}
            setTodoStatus={setTodoStatus}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TodoList
