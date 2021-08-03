import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';

function App() {
  const [userLogged, setUserLogged] = useState(null);

  const changeUserLogged = (user) => {
    setUserLogged(user);
  };

  const onLogout = () => {
    setUserLogged(null);
  };

  return (
    <div className="App">
      <Header user={userLogged} onLogout={onLogout} />
      <Login changeUserLogged={changeUserLogged} />
    </div>
  );
}

export default App;