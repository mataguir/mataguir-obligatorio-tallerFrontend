const VentaItemList = ({ id, nombre, completed, setVentaStatus }) => {

  const onHandleChange = e => {
    const action = e.target.checked
    setVentaStatus(action, id)
  }
  return (
    <tr>
      <th scope='row'>{id}</th>
      <td>{nombre}</td>
      <td>
        <input type='checkbox' checked={completed} onChange={onHandleChange} />
      </td>
      <td>
      </td>
    </tr>
  )
}
export default VentaItemList
