import VentaItemList from './VentaItemList/VentaItemList';

const VentasList = ({ ventas, precioFinal }) => {
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
        {ventas.map(({ id, nombre_cliente, id_paquete, cantidad_mayores, cantidad_menores }) => (
          <VentaItemList
            id={id}
            key={`venta-${id}`}
            cliente={nombre_cliente}
            paquete={id_paquete}
            cantAdultos={cantidad_mayores}
            cantNinos={cantidad_menores}
            precioFinal={precioFinal}
          />
        ))}
      </tbody>
    </table>
  )
}

export default VentasList
