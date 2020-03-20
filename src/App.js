import React from 'react';
import Header from './components/Header';
import SideDrawer from "./components/SideDrawer";
import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import './assets/css/main.css';
import Footer from "./components/Footer";
import Home from './views/Home';
import Products from './views/Products';
import About from './views/About';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCoffee } from '@fortawesome/free-solid-svg-icons'

import {
    BrowserRouter as Router,
    Route,
} from "react-router-dom";

import styles from './assets/jss/main';
import {createUseStyles} from "react-jss";
import Backdrop from "./components/Backdrop";


const useStyles = createUseStyles(styles);
library.add(fab, faBars, faCoffee);

function App() {

    const classes = useStyles();
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    const toggleNavDrawer = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <Router>
            <div className={classes.content}>
                <Header toggleNavDrawer={toggleNavDrawer}/>
                <SideDrawer show={isNavOpen}/>
                <Backdrop show={isNavOpen} toggleNavDrawer={toggleNavDrawer}/>
                <Route exact path='/' component={Home}/>
                <Route exact path='/products' component={Products}/>
                <Route exact path='/about' component={About}/>
                {/*<Footer/>*/}
            </div>
        </Router>
    );
}

export default App;
