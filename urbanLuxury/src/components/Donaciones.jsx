import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Donaciones.css'

function Donaciones() {
  const [donationAmount, setDonationAmount] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [donationConfirmed, setDonationConfirmed] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleDonation = () => {
    if (!donationAmount || !name || !email) {
      
      setShowError(true);
      
      } else {
      // Aquí puedes enviar los datos del usuario y el monto de la donación a tu servidor o realizar alguna acción relevante.
      // En este ejemplo, simplemente mostramos un mensaje de confirmación.
      setDonationConfirmed(true);
      setShowError(false);
    }
  };

  return (
    <div id='box'>
      <p>Por favor, ingresa el monto de tu donación:</p>
      <Form>
        <Form.Group controlId="donationAmount">
          <Form.Control
          id='holder'
            type="number"
            placeholder="Monto de la donación"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="name">
          <Form.Control
          id='holder'
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Control
          id='holder'
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Button variant="success" className="custom-button" id='boton' onClick={handleDonation}>
        
          Confirmar Donación
        </Button>
      </Form>
      {showError && (
        <Alert variant="danger" id='err'>
          Por favor, completa todos los campos antes de confirmar la donación.
        </Alert>
      )}
      {donationConfirmed && (
        <p>¡Gracias por tu donación! El monto de ${donationAmount} ha sido donado con éxito.</p>
      )}
    </div>
  );
}

export default Donaciones;

