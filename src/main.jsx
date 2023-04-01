import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App'
//import 'mdb-react-ui-kit/dist/css/mdb.min.css';
//import "@fortawesome/fontawesome-free/css/all.min.css";
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
