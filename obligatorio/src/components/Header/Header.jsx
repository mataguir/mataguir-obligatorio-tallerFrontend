import { useDispatch, useSelector } from 'react-redux'
import { onLogoutAction } from '../../store/actions'
import './Header.css'
import logo from './logo.svg'

const Header = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)

  const onLogout = () => {
    dispatch(onLogoutAction())
  }
  return (
    <header className='App-header'>
      <nav className='navbar navbar-dark bg-dark'>
        {/* eslint-disable-next-line*/}
        <a className='navbar-brand' href='#'>
          <img
            src={logo}
            width='30'
            height='30'
            className='d-inline-block align-top'
            alt=''
          />
          Obligatorio
        </a>
        {user ? (
          <button onClick={onLogout} className='btn btn-info'>
            Logout
          </button>
        ) : (
          ''
        )}
      </nav>
    </header>
  )
}
export default Header
