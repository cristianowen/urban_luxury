import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UsuarioContext } from '../components/context/UserContext';

function Login() {
  const { usuario, setUsuario } = React.useContext(UsuarioContext);

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Verifica si los datos ingresados coinciden con el nombre y la contraseña predeterminados
    if (formData.username === 'juan' && formData.password === '1') {
      // Actualiza el estado del usuario
      setUsuario({
        username: formData.username,
        // Otros datos del usuario si es necesario
      });
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
        </div>

        <Link to={'/app'} className="custom-link">
          <button type="submit">Iniciar Sesión</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
