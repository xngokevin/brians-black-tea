import React, { Component } from 'react';
import { Nav, Button } from 'react-bootstrap';
import {
    Link
} from "react-router-dom";

class Header extends Component {


    render() {
        return (
            <Nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to={'/'}>
                    <img src="http://placehold.it/150x50?text=Logo" alt=""/>
                </Link>
                <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </Button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={'/'}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/products'}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={'/about'}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </Nav>
        );
    }
}

export default Header;