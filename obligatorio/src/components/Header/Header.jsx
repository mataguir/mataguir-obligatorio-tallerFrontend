import './Header.css'

const Header = ({ user, onLogout }) => {
  return (
    <>
      <header>
        <h1>Obligatorio</h1>
        {user ? <button onClick={onLogout}>Logout</button> : ''}
      </header>
    </>
  )
}

export default Header
