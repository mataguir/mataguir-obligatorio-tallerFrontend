import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { deleteTodo, getPaquetes, registrarCompra } from '../../services/api'
import './Dashboard.css'
import BarChart from './Stats/Charts/Chart'
import Metrics from './Stats/Metrics/Metrics'
import TodoList from './TodoList/TodoList'
import Venta from './Venta/Venta'

const Dashboard = () => {
  const [todos, setTodos] = useState([])
  const user = useSelector(state => state.user)

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPaquetes(user.id)
        setTodos(response)
      } catch (error) {
        alert(error)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const onDeleteTodo = id => {
    deleteTodo(id)
      .then(() => {
        const filterTodoList = todos.filter(todo => {
          return todo.id !== id
        })
        setTodos(filterTodoList)
      })
      .catch(e => alert(e))
  }

  const compraTodo = id => {
    registrarCompra(id)

  }

  const setTodoStatus = (action, id) => {
    const newList = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = action
      }
      return todo
    })
    setTodos(newList)
  }

  const getCompleted = () => {
    const completed = todos.filter(todo => todo.completed)
    return completed.length
  }

  const getIncompleted = () => {
    const completed = getCompleted()
    return todos.length - completed
  }

  return (
    <div className='container-fluid dashboard'>
      <h1>Dashboard</h1>
      <Metrics completed={getCompleted()} incompleted={getIncompleted()} />
      <br />
      <Venta todos={todos} compraTodo={compraTodo} idUser={user.id}/>
      <br />
      <div className='row'>
        <div className='col-12'>
          <TodoList
            todos={todos}
            deleteTodo={onDeleteTodo}
            setTodoStatus={setTodoStatus}
          />
        </div>
      </div>
      <div className='row'>
        <BarChart completed={getCompleted()} incompleted={getIncompleted()} />
      </div>
    </div>
  )
}

export default Dashboard
