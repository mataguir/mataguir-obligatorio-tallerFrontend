const VentaItemList = ({  id, cliente, paquete, cantAdultos, cantNinos, precio }) => {

  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{cliente}</td>
      <td>{paquete}</td>
      <td>{cantAdultos}</td>
      <td>{cantNinos}</td>
      <td>{precio}</td>
      <td>
      </td>
    </tr>
  )
}
export default VentaItemList
