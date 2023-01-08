import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography, CssBaseline } from '@material-ui/core';
import { ShoppingCart, PersonOutlineOutlined, Facebook, Instagram } from '@material-ui/icons';
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
            <div div className="col-md-2 pl-md-0 text-left">
                <a href="/home">
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
                className="collapse navbar-collapse justify-content-center col-md-6"
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
            <div className='col-md-2 d-flex'>
            {(location.pathname === '/' || location.pathname === '/home' || location.pathname === '/ekskursija' || location.pathname === '/kontakti') && (
                    <div>
                        <IconButton component={Link} to="/grozs" aria-label="Parādīt grozu">
                            <Badge badgeContent={totalItems} color="secondary" overlap="rectangular">
                                <ShoppingCart />
                            </Badge>
                        </IconButton>
                    </div> )}
            <div>
                <a href='https://www.facebook.com/trubenieki/'>
                <IconButton aria-label="Facebook">
                    <Facebook />
                </IconButton>
                </a>
            </div>
            <div>
                <a href='https://www.instagram.com/trubenieki/'>
                <IconButton aria-label="Instagram">
                    <Instagram />
                </IconButton>
                </a>
            </div>
            </div>
            </div>
        </nav>
        </>
    )
}

export default Navbar