import React from 'react';
import Header from './components/Header'
import './assets/css/main.min.css';
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { Container } from 'react-bootstrap';
import Footer from "./components/Footer";

import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";


function App() {
  return (
      <Router>
          <div>
              <Header/>
              <Route exact path='/' component={Home}/>
              <Route exact path='/products' component={Products}/>
              <Route exact path='/about' component={About}/>
              <Footer/>
          </div>
      </Router>
  );
}

export default App;
