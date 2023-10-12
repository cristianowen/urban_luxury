import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../components/context/UserContext';
import './Login.css'; // Importa el archivo de estilos

function Login() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState(() => {
    const storedUsername = localStorage.getItem('username');
    return {
      username: storedUsername || '',
      password: '',
    };
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      setUsuario({
        ...usuario,
        username: formData.username,
      });
      localStorage.setItem('username', JSON.stringify(formData.username));
      console.log('Usuario actualizado:', formData.username);
      navigate('/welcome');
    }
  }

  const handleUsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  }

  return (
    <div className="hypnotic-background"> {/* Aplica la clase de fondo hipnotizante */}
     <div id='container'>
      <div id='form-box'>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Usuario:</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleUsernameChange}
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

          <Link to={'/welcome'} className="custom-link">
            <button className="custom-button">Empezar</button>
          </Link>
        </form>
      </div>
    </div>
    </div>
  );
}

export default Login;
