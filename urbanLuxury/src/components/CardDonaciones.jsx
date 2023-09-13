import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './BasicExample.css'; // Agrega un archivo CSS para estilos personalizados

function CardDonaciones() {
  return (
    <>
        

    <Card className="custom-card" id="caa">
      <div className="card-image">
        <Card.Img variant="top"  src="https://www.ecoportal.net/wp-content/uploads/2023/02/calentamiento-global.jpg" />
       
      </div>
      <Card.Body>
        <Card.Title className="card-title">Donaciones</Card.Title>
        <Card.Text className="card-text">
        Tu generosidad hace la diferencia. Ayúdanos con tu donación hoy.
        </Card.Text>
        <Link to={'/Donaciones'} className="custom-link">
          <button className="custom-button">Empezar</button>
        </Link>
      </Card.Body>
    </Card>
    </>
  );
}

export default CardDonaciones;