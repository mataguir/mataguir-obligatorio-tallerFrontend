import VentaItemList from './VentaItemList/VentaItemList';

const VentasList = ({ ventas, setVentaStatus }) => {
  debugger
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Cliente</th>
          <th>Paquete</th>
          <th>Cant Adultos</th>
          <th>Cant Niños</th>
          <th>Precio Final</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map(({ id, cliente, paquete, cantAdultos, cantNinos, precioFinal }) => (
          <VentaItemList
            id={id}
            key={`venta-${id}`}
            cliente={cliente}
            paquete={paquete}
            cantAdultos={cantAdultos}
            cantNinos={cantNinos}
            cantNinos={cantNinos}
            precioFinal={precioFinal}
            setVentaStatus={setVentaStatus}
          />
        ))}
      </tbody>
    </table>
  )
}

export default VentasList
