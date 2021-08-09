import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPaquetes, registrarCompra, getVentas } from '../../services/api';
import './Dashboard.css';
import BarChart from './Stats/Charts/Chart';
import Metrics from './Stats/Metrics/Metrics';
import VentasList from './VentaList/VentasList';
import Venta from './Venta/Venta';

const Dashboard = () => {
  const [ventas, setVentas] = useState([])
  const [paquetes, setPaquetes] = useState([]);
  const [precios, setPrecios] = useState([]);
  const user = useSelector(state => state.user);

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getVentas(user.id);
        debugger
        setVentas(response.ventas);
      } catch (error) {
        alert(error);
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPaquetes(user.id);
        setPaquetes(response.destinos);
        debugger
      } catch (error) {
        alert(error);
      }
    })()
  }, [])


  // useEffect((id) => {
  //   ;(async () => {
  //     try {
  //       const response = await registrarCompra(id);
  //       debugger
  //       setVentas(response.ventas);
  //     } catch (error) {
  //       alert(error+"SET ventas");
  //     }
  //   })()
  // }, [])

  const comprarPaquete = paquete => {
    try {
      const response =  registrarCompra(paquete);
    } 
    catch (error) {
      alert(error);
    }
  }

  const calcularPrecioF = () => {
    let pre = [];
    for (let i = 0; i < ventas.length; i++) {
      for (let j = 0; j < paquetes.length; j++) {
        if (ventas[i].id_paquete === paquetes[j].id) {
          pre.push(ventas[i].cantidad_mayores * paquetes[j].precio_mayor + ventas[i].cantidad_menores * paquetes[j].precio_menor);
        }
      }
    }
    setPrecios(pre);
    return precios;
  }

  // const setVentaStatus = (action, id) => {
  //   debugger
  //   const newList = ventas.map(venta => {
  //     if (venta.id === id) {
  //       venta.completed = action
  //     }
  //     return venta
  //   })
  //   setVentas(newList)
  // }

  // const getCompleted = () => {
  //   const completed = todos.filter(todo => todo.completed)
  //   return completed.length
  // }

  // const getIncompleted = () => {
  //   const completed = getCompleted()
  //   return todos.length - completed
  // }

  return (
    <div className='container-fluid dashboard'>
      <h1>Dashboard</h1>
      {/* <Metrics completed={getCompleted()} incompleted={getIncompleted()} /> */}
      <br />
      <Venta paquetes={paquetes} comprarPaquete={comprarPaquete} idUser={user.id}/>
      <br />
      <div className='row'>
        <div className='col-12'>
          <VentasList
            ventas={ventas}
            precioFinal={calcularPrecioF}
          />
        </div>
      </div>
      {/* <div className='row'>
        <BarChart completed={getCompleted()} incompleted={getIncompleted()} />
      </div> */}
    </div>
  )
}

export default Dashboard
