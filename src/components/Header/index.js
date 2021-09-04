import React, { Component } from 'react';
import {Link} from "gatsby"

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";


import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import "./index.scss";


export class Header extends Component {
    render() {
        return (
            <header className="header">
                <AppBar color="primary">
                    <Container>

                    <Toolbar>
                        <Button color="inherit" component={Link} to="/" >
                            Home
                        </Button>
                        {/* Add instagram, contact, and join button */}
                        <Button color="inherit" component={Link} to="/about">
                            Who We Are
                        </Button>
                        <Button color="inherit" component={Link} to="/join">
                            Join
                        </Button>
                        <Button color="inherit" component={Link} to="/events">
                            Events
                        </Button>
                        <Button color="inherit" component={Link} to="/contact">
                            Contact
                        </Button>
                        <div className="grow" />

                        <IconButton
                            edge="end"
                            aria-label="Instagram account"
                            aria-controls="primary-search-instagram"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://www.instagram.com/neublockchain/"

                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="Linkedin account"
                            aria-controls="primary-search-linkedin"
                            aria-haspopup="true"
                            color="inherit"
                            href="https://www.linkedin.com/company/neu-blockchain-org/"
                        >
                            <LinkedInIcon />
                        </IconButton>

                        </Toolbar>
                    </Container>
                </AppBar>
            </header>
        )
    }
}

export default Header
