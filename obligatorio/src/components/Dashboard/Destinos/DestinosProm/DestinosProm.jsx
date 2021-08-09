const DestinosProm = ({ ventas, setDestinoStatus }) => {
  debugger
  return (
    <table className='table'>
      <thead>
        <tr>
          <th>#</th>
          <th>Destino</th>
        </tr>
      </thead>
      <tbody>
        {ventas.map(({ id, destino}) => (
          <tr>
            <th scope='row'>{id}</th>
            <td>{destino}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DestinosProm