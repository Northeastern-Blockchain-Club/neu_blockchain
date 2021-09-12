import * as React from "react";
import Layout from "../components/Layout";

import Fade from "react-reveal/Fade";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const words = ["Finance", "Security", "Voting", "IoT", "Everything "];
// fades in a buzzword every sleep(x) milliseconds. Theoretically. Still some
// bugs to work out, for the function running too fast. Ironic.
function FadeText() {
  let word = words[0];
  for (let i = 0; i < words.length; i++) {
    // await sleep(3000);
    word = words[i];
  }
  return (
    <div>
      <div>{word}</div>
    </div>
  );
}

const IndexPage = () => {
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
              <Fade top opposite>
                <FadeText />
              </Fade>
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
    </Layout>
  );
  // add icons
  // add subscription
};

export default IndexPage;
