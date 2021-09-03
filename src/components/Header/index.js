import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
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
                    <Toolbar>
                        <Button color="inherit">
                            Home
                        </Button>
                        {/* Add instagram, contact, and join button */}
                        <Button color="inherit">
                            Who We Are
                        </Button>
                        <Button color="inherit">
                            Join
                        </Button>
                        <Button color="inherit">
                            Events
                        </Button>
                        <Button color="inherit">
                            Contact
                        </Button>
                        <div className="grow" />

                        <IconButton
                            edge="end"
                            aria-label="Instagram account"
                            aria-controls="primary-search-instagram"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="Linkedin account"
                            aria-controls="primary-search-linkedin"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <LinkedInIcon />
                        </IconButton>

                    </Toolbar>
                </AppBar>
            </header>
        )
    }
}

export default Header
