import React, { useState } from "react";
import { Link } from "gatsby";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Fade from "@material-ui/core/Fade";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import IconButton from "@material-ui/core/IconButton";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import Img from "gatsby-image";
import Logo from "../Logo";
import "./index.scss";

const MobileMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Grid item xs={4}>
          <IconButton
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem component={Link} to="/" onClick={handleClose}>
              Home
            </MenuItem>
            <MenuItem component={Link} to="/events" onClick={handleClose}>
              Events
            </MenuItem>
            <MenuItem component={Link} to="/join" onClick={handleClose}>
              Join
            </MenuItem>
            <MenuItem component={Link} to="/contact" onClick={handleClose}>
              Contact
            </MenuItem>
          </Menu>
        </Grid>

        <Grid item xs={4} className="center">
          <IconButton
            edge="end"
            aria-label="Instagram account"
            aria-controls="primary-search-instagram"
            aria-haspopup="true"
            color="inherit"
            component={Link}
            to="/"
          >
            <Logo className="center" component={Link} to="/" />
          </IconButton>
        </Grid>
        <Grid item xs={4} className="right">
          <div className="grow right" />
          <IconButton
            edge="end"
            aria-label="Instagram account"
            aria-controls="primary-search-instagram"
            aria-haspopup="true"
            color="inherit"
            href="https://www.instagram.com/neublockchain/"
          >
            <InstagramIcon fontSize="medium" />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Linkedin account"
            aria-controls="primary-search-linkedin"
            aria-haspopup="true"
            color="inherit"
            href="https://www.linkedin.com/company/neu-blockchain-org/"
          >
            <LinkedInIcon fontSize="medium" />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

const LargeMenu = () => {
  return (
    <>
      <IconButton
        edge="end"
        aria-label="Instagram account"
        aria-controls="primary-search-instagram"
        aria-haspopup="true"
        color="inherit"
        component={Link}
        to="/"
      >
        <Logo className="" component={Link} to="/" />
      </IconButton>
      <Button color="inherit" component={Link} to="/">
        Home
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
        <InstagramIcon fontSize="medium" />
      </IconButton>
      <IconButton
        edge="end"
        aria-label="Linkedin account"
        aria-controls="primary-search-linkedin"
        aria-haspopup="true"
        color="inherit"
        href="https://www.linkedin.com/company/neu-blockchain-org/"
      >
        <LinkedInIcon fontSize="medium" />
      </IconButton>
    </>
  );
};

const Header = () => {
  const theme = useTheme();
  const largeViewport = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <header>
      <AppBar color="primary" style={{}} position="sticky">
        <Container>
          <Toolbar>{largeViewport ? <LargeMenu /> : <MobileMenu />}</Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
