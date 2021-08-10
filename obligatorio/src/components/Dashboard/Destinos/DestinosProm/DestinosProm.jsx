const DestinosProm = ({ destinosProm }) => {

  return (
    <table className='table'>
      <thead>
        <tr>
          <th>Destino</th>
        </tr>
      </thead>
      <tbody>
        {destinosProm.map(({nombre}) => (
          <tr>
            <td>{nombre}</td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default DestinosProm