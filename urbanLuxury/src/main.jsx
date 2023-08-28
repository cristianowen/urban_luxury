import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserHistory } from '@remix-run/router'
import Causas from './components/Causas.jsx'

const routes = createBrowserRouter([{
  path: '/',
  element: <App/>
},{
  path: '/Causas',
  element: <Causas/>
}])


ReactDOM.createRoot(document.getElementById('root')).render(
 <StrictMode>
  <RouterProvider router = {routes}/>
 </StrictMode>
)
