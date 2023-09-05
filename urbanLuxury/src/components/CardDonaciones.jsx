import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardDonaciones() {
  return (
    <>
       <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Donaciones</Card.Title>
        <Card.Text>
        Tu generosidad hace la diferencia. Ayúdanos con tu donación hoy.
        </Card.Text>
        <Button variant="primary"><Link to={'/Donaciones'} className = 'link'>Empezar</Link></Button>
      </Card.Body>
    </Card> 
    </>
  );
}

export default CardDonaciones;