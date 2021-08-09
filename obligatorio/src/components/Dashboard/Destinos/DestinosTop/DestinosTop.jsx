const DestinosTop = ({ ventas, setDestinoStatus }) => {
  debugger
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Destino</th>
          <th>Cant Ventas</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map(({ id, destino, cantVentas}) => (
          <tr>
            <th scope='row'>{id}</th>
            <td>{destino}</td>
            <td>{cantVentas}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DestinosTop