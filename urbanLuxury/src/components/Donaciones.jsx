import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Donaciones.css'

function Donaciones() {
  const [donationAmount, setDonationAmount] = useState('');
  const [donationConfirmed, setDonationConfirmed] = useState(false);

  const handleDonation = () => {
    // Aquí puedes agregar la lógica para procesar la donación, como enviarla a un servidor, etc.
    // Por ahora, simplemente establecemos donationConfirmed en true.
    setDonationConfirmed(true);
  };

  return (
    <div>
      <h1>Donaciones</h1>
      <div>
        <p >Por favor, ingresa el monto de tu donación:</p>
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
          <Button variant="primary" className="custom-button" onClick={handleDonation}>
            Confirmar Donación
          </Button>

        </Form>
        {donationConfirmed && (
          <p>¡Gracias por tu donación! El monto de ${donationAmount} ha sido donado con éxito.</p>
        )}
      </div>
    </div>
  );
}

export default Donaciones;
