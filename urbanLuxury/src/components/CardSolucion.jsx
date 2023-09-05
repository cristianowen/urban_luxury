import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardSolucionn() {
  return (
    <>
       <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Soluciones del calentamiento global</Card.Title>
        <Card.Text>
          Posibles soluciones del cambio climatico
        </Card.Text>
        <Button variant="primary"><Link to={'/causas'} className = 'link'>Empezar</Link></Button>
      </Card.Body>
    </Card> 
    </>
  );
}

export default CardSolucionn;