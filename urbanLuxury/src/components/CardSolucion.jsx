import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function CardSolucionn() {
  return (
    <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>

    
    <Card style={{ width: '18rem'}}>

      <Card.Body>
        <Card.Title>Posibles soluciones del calentamiento global</Card.Title>
        <Card.Text>
          En este articulo podrás informarte de distintas causas del calentamiento global
        </Card.Text>
        <Button variant="primary"><Link to={'/causas'} className = 'link'>Empezar</Link></Button>
      </Card.Body>
    </Card>
    </div>
  );
}

export default CardSolucionn;