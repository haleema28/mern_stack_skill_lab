import React from 'react'
import App from './App.jsx'
import './index.css'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  </React.StrictMode>,
)


