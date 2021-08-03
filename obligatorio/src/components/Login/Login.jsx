import { useRef } from 'react'
import { userLogin } from '../../services/api'

const Login = ({changeUserLogged}) => {
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = e => {
    e.preventDefault()

    if (usernameRef.current.value === '') {
      alert('Debes completar el campo username')
    } else if (passwordRef.current.value === '') {
      alert('Debes completar el campo password')
    } else {
      userLogin({
        username: usernameRef.current.value,
        password: passwordRef.current.value
      })
        .then(userData => {
          changeUserLogged(userData)
        })
        .catch(statusError => {
          if (statusError === 404) {
            alert('Datos incorrectos, el usuario no existe')
          } else {
            alert('Algo salió mal, por favor reintenta más tarde.')
          }
        })
    }
  }

  return (
    <>
      <section className='d-flex flex-md justify-content-center login'>
        <div className='card'>
          <h2>Welcome back!</h2>
          <section className='card-body'>
            <form>
              <label htmlFor='inputEmail'>Username</label>
              <br />
              <input
                type='email'
                name='username'
                className='form-control'
                ref={usernameRef}
              />
              <br />
              <label htmlFor='inputPassword'>Password</label>
              <br />
              <input
                type='password'
                name='password'
                className='form-control'
                ref={passwordRef}
              />
              <br />
              <button className='btn btn-primary' onClick={handleSubmit}>
                Login
              </button>
            </form>
          </section>
        </div>
      </section>
    </>
  )
}

export default Login
