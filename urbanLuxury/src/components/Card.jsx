import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function BasicExample() {
  return (
    <>
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src=""/>
      <Card.Body>
        <Card.Title>Causas del calentamiento global</Card.Title>
        <Card.Text>
          informate sobre las principales causas del calentamiento global
        </Card.Text>
        <Button variant="primary"><Link to={'/causas'} className = 'link'>Empezar</Link></Button>
      </Card.Body>
    </Card> 
    </>

  );
}

export default BasicExample;