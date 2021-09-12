import * as React from "react";
import { useState } from "react";

import { navigate } from "gatsby-link";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import "./index.scss";

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const ContactCard = () => {
  const [state, setState] = React.useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => console.log("Form successfully submitted"))
      .catch((error) => alert(error));
  };

  return (
    <Container maxWidth="md">
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="full-page"
      >
        <Card className="contact-card">
          <Typography variant="h5" className="contact-field">
            Have a Question? Ask us!
          </Typography>
          <form
            name="contact"
            method="post"
            action="/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact" />
            <Grid container direction="row" alignItems="center">
              <input type="hidden" name="bot-field" />
              <Grid item xs={12}>
                <TextField
                  placeholder="Name"
                  name="name"
                  type="name"
                  id="form-input-control-name"
                  color="primary"
                  width={16}
                  className="contact-field"
                  onChange={handleChange}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email"
                  name="email"
                  type="email"
                  id="form-input-control-email"
                  width={16}
                  className="contact-field"
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Message"
                  name="message"
                  id="form-input-control-message"
                  type="text"
                  maxRows="10"
                  multiline
                  width={16}
                  rows={4}
                  className="contact-field"
                  onChange={handleChange}
                />
              </Grid>
              <Button
                type="submit"
                color="primary"
                variant="contained"
                className="contact-button"
              >
                Submit
              </Button>
            </Grid>
          </form>
        </Card>
      </Grid>
    </Container>
  );
};

export default ContactCard;
