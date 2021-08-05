import { useRef, useState } from 'react'

const Venta = ({ todos, compraTodo, idUser }) => {
    const slcPaqueteRef = useRef()
    const nombreRef = useRef()
    const cantMenRef = useRef()
    const cantMayRef = useRef()

    const [isAlertVisible, setAlertVisibillity] = useState(false)
    const [message, setMessage] = useState('')
    const [alertClass, setAlertClass] = useState('')

    const onCompraClick = async e =>{
        if (cantMayRef.current.value + cantMenRef.current.value <= 10){
            try {
                await compraTodo({
                    idVendedor: idUser,
                    nombreCliente: nombreRef.current.value,
                    idPaquete: 1,
                    cantidadMayores: cantMayRef.current.value,
                    cantidadMenores: cantMenRef.current.value                    
                })
                setMessage('Compra realizada con exito')
                setAlertClass('success')
                setAlertVisibillity(true)
        
                
              } catch (error) {
                setMessage(error.message)
                setAlertClass('danger')
                setAlertVisibillity(true)                
              }
        }
        else{
            alert("Corrobore los dato ingresados")
        }
        // compraTodo(slcPaquete)
    }

    return (
        <div>
            <label htmlFor="txtNombre">Ingrese el nombre</label>
            
            <input type="text" id="txtNombre" ref={nombreRef}/>
            <br />
            <label htmlFor="slcPaquete">Seleccione el paquete</label>
           
            <select id="slcPaquete" ref={slcPaqueteRef}>
                {todos.map(({id, nombre}) =>(
                    <option value={`${id}`}>${nombre}</option>
                  
                ))}
            </select>
            <br />
            <label htmlFor="cantMayores">Ingrese cantidad de mayores</label>
            <input type="number" id="cantMayores" ref={cantMayRef}/>
            <br />
            <label htmlFor="cantMenores">Ingrese cantidad de menores</label>
            <input type="number" id="cantMenores" ref={cantMenRef}/>
            <br />
            <button onClick={onCompraClick}>Comprar</button>
        </div>
        

      /*<table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Completed</th>
            <th>Borrar</th>
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
      </table>*/
    )
  }
  
  export default Venta
  