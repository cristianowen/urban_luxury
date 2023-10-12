import React, { useContext } from 'react';
import { UsuarioContext } from '../components/context/UserContext';
import { Link } from 'react-router-dom';

function Welcome() {
  const { usuario } = useContext(UsuarioContext);
    

  return (
    <div>
      <h2>Bienvenido, {usuario}.</h2>
      {/* Otro contenido de bienvenida */}
      <Link to={'/app'} className="custom-link">
          <button type="submit">Ir a app</button>
        </Link>
    </div>
  );
}

export default Welcome;
