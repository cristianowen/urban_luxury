import React, { useContext } from 'react';
import { UsuarioContext } from '../components/context/UserContext';
import { Link } from 'react-router-dom';
import './Login.css'; // Importa el archivo de estilos

function Welcome() {
  const { usuario } = useContext(UsuarioContext);

  return (
    <div className="hypnotic-background"> {/* Aplica la clase de fondo hipnotizante */}
      <div id='caja'>
      <h2>Bienvenido, {usuario}.</h2>
      <br />
            {/* Otro contenido de bienvenida */}
      <Link to={'/app'} className="custom-link">
        <button className="custom-button">Ir a app</button>
      </Link>
    </div>
    </div>
  );
}

export default Welcome;
