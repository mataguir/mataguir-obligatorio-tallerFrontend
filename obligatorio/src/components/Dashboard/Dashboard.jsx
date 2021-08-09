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
  const user = useSelector(state => state.user);

  useEffect(() => {
    ;(async () => {
      try {
        debugger
        const response = await getVentas(user.id);
        debugger
        setVentas(response);
      } catch (error) {
        alert(error+"get ventas");
      }
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const response = await getPaquetes(user.id);
        setPaquetes(response.destinos);
      } catch (error) {
        alert(error+"get paquetes");
      }
    })()
  }, [])

  const comprarPaquete = id => {
    registrarCompra(id);
  }

  const setVentaStatus = (action, id) => {
    const newList = ventas.map(venta => {
      if (venta.id === id) {
        venta.completed = action
      }
      return venta
    })
    setVentas(newList)
  }

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
            setVentaStatus={setVentaStatus}
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
