import React, { useState } from 'react';
import './styles/style.css';
import LoginForm from './components/LoginForm'; // Importa el componente LoginForm
import Sidebar from './components/Sidebar'; // Importa el componente Sidebar
import Content from './components/Content'; // Importa el componente Content

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Simular un inicio de sesión exitoso (reemplazar con la validación real más tarde)
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <h1>OTIUM SISTEMA DE INVENTARIOS</h1>
      {!isLoggedIn && <LoginForm onLogin={handleLogin} />}
      {isLoggedIn && (
        <div className="container">
          <Sidebar />
          <Content />
        </div>
      )}
    </div>
  );
}

export default App;