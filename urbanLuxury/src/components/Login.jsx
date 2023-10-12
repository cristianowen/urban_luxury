import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../components/context/UserContext';


function Login() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  // Inicializa el estado del formulario con los datos del localStorage
  const [formData, setFormData] = useState(() => {
    const storedUsername = localStorage.getItem('username');
    return {
      username: storedUsername || '',
      password: '',
    };
  });

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.username && formData.password) {
      // Verifica si los datos ingresados coinciden con el nombre y la contraseña predeterminados
      
        // Actualiza el estado del usuario con el nombre de usuario ingresado
        setUsuario({
          ...usuario,
          username: formData.username,
          // Otros datos del usuario si es necesario
        });
        // Guarda el nombre de usuario en el localStorage
        localStorage.setItem('username', JSON.stringify(formData.username));
        console.log('Usuario actualizado:', formData.username);
        
        navigate('/welcome');
      
    }
  }

  // Función para manejar cambios en el campo de nombre de usuario
  const handleUsernameChange = (e) => {
    setFormData({ ...formData, username: e.target.value });
  }

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
        
        <Link to={'/Welcome'} className="custom-link">
          <button className="custom-button">Empezar</button>
        </Link>
    
      </form>
    </div>
  );
}

export default Login;