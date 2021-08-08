import TodoItemList from './TodoItemList/TodoItemList'

const TodoList = ({ todos, deleteTodo, setTodoStatus }) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Paquete</th>
          <th>Adultos</th>
          <th>Niños</th>
          <th>Precio final</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, nombre, completed }) => (
          <TodoItemList
            id={id}
            key={`todo-${id}`}
            nombre={nombre}
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
