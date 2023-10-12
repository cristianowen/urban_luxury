import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../components/context/UserContext';

function Login() {
  const { usuario, setUsuario } = useContext(UsuarioContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

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
        console.log('Usuario actualizado:', formData.username);
        
        // Redirige al usuario a la página de bienvenida utilizando navigate
        navigate('/welcome');
      
        
      }
   
      
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
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;
