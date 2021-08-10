const DestinosTop = ({ destinosTop }) => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Destino</th>
          <th>Cant Ventas</th>
        </tr>
      </thead>
      <tbody>
        {destinosTop.map(({ destino, cantVentas}) => (
          <tr>
            <td>{destino}</td>
            <td>{cantVentas}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DestinosTop;