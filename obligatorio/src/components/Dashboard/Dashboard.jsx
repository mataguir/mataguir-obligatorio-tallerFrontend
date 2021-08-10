import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getPaquetes, registrarCompra, getVentas } from '../../services/api';
import DestinosProm from './Destinos/DestinosProm/DestinosProm';
import DestinosTop from './Destinos/DestinosTop/DestinosTop';
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

  const filtrarTop = () => {
    let ventasTop = [];

    paquetes.map(p => {
      const cantidadVentas = calcularCantidadVentas(p.id)
      if(cantidadVentas > 3) {
      ventasTop.push(p)
      }
    })

  return ventasTop;
  }

  const calcularCantidadVentas = (idPaquete) => {
    const total = ventas.filter(v => v.id_paquete == idPaquete)
    return total.length
  }

  const filtrarProm = () => {
    let ventasProm = [];

    paquetes.map(p => {
      const cantidadVentas = calcularCantidadVentas(p.id)
      if(cantidadVentas == 0) {
        ventasProm.push(p)
      }
    })

    return ventasProm;
  }

  const perDest = () => {
    let destino = [];
    let cantPasaj = [];
    let cant =0;
    paquetes.forEach(paq => {
      ventas.forEach(ven =>{
        if(paq.id == ven.id_paquete){
          cant += ven.cantidad_menores + ven.cantidad_mayores;
          
        }
      })    
      destino.push(paq.nombre);      
      cantPasaj.push(cant);
      cant=0;
    })
    
     return {
       destinos : destino,
       pasajeros : cantPasaj
     }
   }

  const precioPromedio = () => {
    let destino = [];
    let preProm = [];
    let valor = 0;
    paquetes.forEach(paq => {
      valor = (paq.precio_menor + paq.precio_mayor) /  2                       
      destino.push(paq.nombre);      
      preProm.push(valor);
      valor=0;
    })

    return {
      destinos : destino,
      precios : preProm
    };
 }

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
            paquetes={paquetes}
          />
        </div>
      </div>
      <div className='row col-5'>
        <h4>Personas por Destino</h4>
        <BarChart destinos={perDest().destinos} cantPasajeros={perDest().pasajeros} />
      </div> 
      <div className='row col-5'>
        <h4>Precios Destinos</h4>
        <BarChart destinos={precioPromedio().destinos} cantPasajeros={precioPromedio().precios} />
      </div>
      <DestinosTop destinosTop={filtrarTop()}/>
      <DestinosProm destinosProm={filtrarProm()}/>
    </div>
  )
}

export default Dashboard
