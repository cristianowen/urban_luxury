import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Causas from './components/Causas.jsx'
import Soluciones from './components/Soluciones.jsx'
import Donaciones from './components/Donaciones.jsx'
import Login from './components/Login.jsx'
import UsuarioProvider from './components/context/UserContext';
import Welcome from './components/Welcome.jsx'


const  root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <>
  <React.StrictMode>
  <BrowserRouter>
  <UsuarioProvider>
       <Routes>
       <Route path="/" element={<Login />}></Route>
       <Route path="/Welcome" element={<Welcome />}></Route>
       <Route path="/app" element={<App />}></Route>
       <Route path="/Causas" element={<Causas />}></Route>
	     <Route path="/Soluciones" element={<Soluciones/>}></Route>
       <Route path="/Donaciones" element={<Donaciones />}></Route>
       </Routes>
       </UsuarioProvider>
     </BrowserRouter>
  </React.StrictMode>
</>
  )

