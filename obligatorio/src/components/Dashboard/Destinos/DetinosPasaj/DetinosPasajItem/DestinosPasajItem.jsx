const DestinosPasajItem = ({  paquete, clientes}) => {

    return (
      <tr>
        <th scope='row'>{paquete}</th>
        <td>{clientes}</td>     
      </tr>
    )
  }
  export default DestinosPasajItem