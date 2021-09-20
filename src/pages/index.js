import * as React from "react";
import Layout from "../components/Layout";

import Typewriter from 'typewriter-effect';

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const words = ["Finance.", "Security.", "Voting.", "IoT.", "...", "Everything."];
// fades in a buzzword every sleep(x) milliseconds. Theoretically. Still some
// bugs to work out, for the function running too fast. Ironic.


const HeaderText = (alreadyVisited) => {
  if (alreadyVisited == true)
    return (
      <div>Everything. </div>
    )
  else
    return (
      <Typewriter
        onInit={(typewriter) => {
          for (let i = 0; i < words.length; i++) {
            if (i < words.length - 1) {
              typewriter.typeString(words[i])
                .pauseFor(900)
                .deleteAll()
                .start()
            }
            else {
              typewriter.typeString(words[i])
                .pauseFor(2500)
                .start()
            }
          }
        }}
      />
    )
}

const IndexPage = () => {

  const alreadyVisited = JSON.parse(localStorage.getItem('alreadyVisited'))
  localStorage.setItem('alreadyVisited', true);

  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="three-quarter-page"
      >
        <Grid item md={12}>
          <div className="content-container">
            <Typography
              variant="h2"
              className="center-text content-container-text"
            >
              The Future of{" "}
              <HeaderText visted={alreadyVisited} />

            </Typography>
          </div>
        </Grid>
      </Grid>
      <div className="bg-white">
        <Container>
          <Typography variant="body1">
            NEU Blockchain is a student-led organization dedicated to advancing
            blockchain education, development, and research.
          </Typography>
          <br />
          <Typography variant="body1">
            Our mission is to foster an open community of thought leaders,
            developers, and researchers to support the development of blockchain
            and digitical currency technologies.
          </Typography>
          <br />
          <Typography variant="body1">
            We are open to undergraduate students, graduate students, alumni,
            and industry professionals.
          </Typography>

          <Typography variant="body1">
            Join us in working together to build the next blockchain-crypto hub
            at Northeastern.
          </Typography>
        </Container>
      </div>
      <br />
    </Layout>
  );
  // add icons
  // add subscription
};

export default IndexPage;
