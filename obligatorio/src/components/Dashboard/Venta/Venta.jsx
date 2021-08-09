import { useRef, useState } from 'react';
import './Venta.css';

const Venta = ({ paquetes, comprarPaquete, idUser }) => {
    const idPaqueteRef = useRef();
    const nombreRef = useRef();
    const cantMenRef = useRef();
    const cantMayRef = useRef();

    const [isAlertVisible, setAlertVisibillity] = useState(false);
    const [message, setMessage] = useState('');
    const [alertClass, setAlertClass] = useState('');

    const onCompraClick = async e =>{
      debugger
      if (nombreRef.current.value != '' || cantMayRef.current.value + cantMenRef.current.value != '') {
        if (Number(cantMayRef.current.value) + Number(cantMenRef.current.value) <= 10){
          try {
            await comprarPaquete({
              idVendedor: idUser,
              nombreCliente: nombreRef.current.value,
              idPaquete: Number(idPaqueteRef.current.value),
              cantidadMayores: Number(cantMayRef.current.value),
              cantidadMenores: Number(cantMenRef.current.value)                    
            });
            debugger
            // setMessage('Compra realizada con exito');
            // setAlertClass('success');
            // setAlertVisibillity(true);
          }
          catch (error) {
            debugger
            // setMessage(error.message);
            // setAlertClass('danger');
            // setAlertVisibillity(true);             
          }
        }
        else{
            alert("La cantidad de personas sumadas no puede ser mayor a 10");
        }
      }
      else {
        alert("No puede haber campos vacíos");
      }
    }

    return (
      <section className='d-flex flex-md justify-content-center venta'>
        <div className='card'>
          <h2>Vender Paquete</h2>
          <section className='card-body'>
            <form>
              <label htmlFor="txtNombre">Ingrese el nombre del cliente</label>
                <br />
                <input type="text" id="txtNombre" className='form-control' ref={nombreRef}/>
                <br />
                <label htmlFor="slcPaquete">Seleccione el paquete</label>
                <br />
                <select id="slcPaquete" className='form-control' ref={idPaqueteRef}>
                  {paquetes.map(({id, nombre}) =>(
                    <option value={`${id}`}>{nombre}</option>
                  
                  ))}
                </select>
                <br />
                <label htmlFor="cantMayores">Ingrese cantidad de mayores</label>
                <br />
                <input type="number" id="cantMayores" className='form-control' ref={cantMayRef}/>
                <br />
                <label htmlFor="cantMenores">Ingrese cantidad de menores</label>
                <br />
                <input type="number" id="cantMenores" className='form-control' ref={cantMenRef}/>
                <br />
                <button className='btn btn-primary' onClick={onCompraClick}>Comprar</button>
            </form>
          </section>
        </div>
      </section>
    )
  }
  
  export default Venta