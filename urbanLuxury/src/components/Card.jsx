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
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary"><Link to={'/causas'} className = 'link'>Empezar</Link></Button>
      </Card.Body>
    </Card> 
    </>

  );
}

export default BasicExample;