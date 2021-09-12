import * as React from "react";
import { useState } from "react";

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
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    fetch("/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({ "form-name": "contact", ...this.state }),
    }).catch((error) => alert(error));

    e.preventDefault();
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
            data-netlify="true"
            netlify-honeypot="bot-field"
          >
            <Grid container direction="row" alignItems="center">
              <input type="hidden" name="bot-field" />
              <Grid item xs={12}>
                <TextField
                  placeholder="Name"
                  name="name"
                  type="name"
                  fullWidth
                  id="form-input-control-name"
                  color="primary"
                  width={16}
                  className="contact-field"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                ></TextField>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  placeholder="Email"
                  name="email"
                  fullWidth
                  type="email"
                  id="form-input-control-email"
                  width={16}
                  className="contact-field"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  placeholder="Message"
                  name="message"
                  id="form-input-control-message"
                  type="text"
                  fullWidth
                  maxRows="10"
                  multiline
                  width={16}
                  className="contact-field"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
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
