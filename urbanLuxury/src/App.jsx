import BasicExample from './components/Card'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSolucionn from './components/CardSolucion';

function App() {

  return (
    <>
      <div>
        <div className="tercio"style={{marginLeft: '2%'}}>
          <BasicExample />
        </div>
        <div className="tercio">
          <CardSolucionn />
        </div>
        <div className="tercio"style={{marginRight: '2%'}}>
         <CardSolucionn />
        </div>
      </div>
    </>
  )
}

export default App
