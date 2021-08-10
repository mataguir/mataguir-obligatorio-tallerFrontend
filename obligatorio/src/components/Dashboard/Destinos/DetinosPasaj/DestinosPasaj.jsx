const DestinosPasaj = ({ paquetes, cantPasaj }) => {
    return (
      <section className='d-flex flex-md justify-content-center ventas-list'>
        <h4>Tabla de personas por destino</h4>
        <table className='table'>
          <thead>
            <tr>
              <th>Destino</th>
              <th>Cantidad de clientes</th>       
            </tr>
          </thead>
          <tbody>
            {paquetes.forEach(nom => {
                <td>{nom}</td>
            })}
            {cantPasaj.forEach(num => {
                <td>{num}</td>
            })}
          </tbody>
        </table>
      </section>
    )
  }
  
  export default DestinosPasaj