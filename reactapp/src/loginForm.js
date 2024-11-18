import React, { useState } from 'react';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validación básica
    if (!email || !password) {
      setError('Por favor, ingresa tu correo electrónico y contraseña.');
      return;
    }

    // Enviar la solicitud de inicio de sesión al backend
    fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        onLogin();
      } else {
        setError(data.error);
      }
    })
    .catch(error => {
      setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* ... Campos de formulario ... */}
      {error && <p className="error">{error}</p>}
      <button type="submit">Iniciar Sesión</button>
    </form>
  );
}


export default LoginForm;