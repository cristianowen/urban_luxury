import BasicExample from './components/Card'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSolucionn from './components/CardSolucion';
import backgroundImage from './assets/Cambio_Climatico_746x419.jpg'
function App() {

  const containerStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover', // Ajuste para cubrir el área completo del fondo
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center', // Centra la imagen en el fondo
    minHeight: '100vh', // Ajusta la altura según tus necesidades
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white', // Color de texto para que se vea bien en el fondo
  };


  return (
    <>         
    <div style={containerStyle}>
    <BasicExample/>
    <CardSolucionn/>
    </div>

    </>
  )
}

export default App
