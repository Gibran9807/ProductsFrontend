import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/navbar/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Footer/>
  </React.StrictMode>
)
