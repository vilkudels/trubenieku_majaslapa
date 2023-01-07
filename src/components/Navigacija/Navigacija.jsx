import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, CssBaseline } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap'; 

import logo from '../../assets/logo.png';
import useStyles from './styles';

const Navbar = ( {totalItems} ) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        
        <>
        <nav className="navbar navbar-light navbar-expand-md fixed-top">
            <div className="container">
            <div div className="col-2 pl-md-0 text-left">
                <a href="#top">
                <img src={logo} height={70} alt="image" />
                </a>
            </div>
            <Button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav4"
                aria-controls="navbarNav4"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon" />
            </Button>
            <div
                className="collapse navbar-collapse justify-content-center col-md-8"
                id="navbarNav4"
            >
                <ul className="navbar-nav justify-content-center nav-font">
                <li className="nav-item active">
                    <a className="nav-link" href="/home">
                    PAR MUMS
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">
                    PRODUKTI
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/ekskursija">
                    EKSKURSIJAS
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/kontakti">
                    KONTAKTI
                    </a>
                </li>
                </ul>
            </div>
            {(location.pathname === '/' || location.pathname === '/home') && (
                    <div className={classes.button}>
                        <IconButton component={Link} to="/grozs" aria-label="Show cart items" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary" overlap="rectangular">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
            <ul className="navbar-nav col-2 justify-content-end d-none d-md-flex">
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <FontAwesomeIcon icon={faFacebookF} />
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                </li>
            </ul>
            </div>
        </nav>
        </>
    )
}

export default Navbar