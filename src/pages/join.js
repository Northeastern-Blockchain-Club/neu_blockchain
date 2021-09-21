import * as React from "react";
import Layout from "../components/Layout";

import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

const JoinPage = () => {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        className="full-page"
      >
        <Typography variant="h4"> Get Involved </Typography>
        <br />
        <ButtonGroup aria-label="Join Button Links">
          <Button variant="outlined" href="https://linktr.ee/NEUBlockchain">
            Our Linktree
          </Button>
          <Button
            variant="outlined"
            href="https://docs.google.com/forms/d/e/1FAIpQLSe7hX7MGJ7ShZSe2ZhuIajLmXBfiFseyKC28oGxMATNM_bkYw/viewform"
          >
            Join the Mailing List
          </Button>
        </ButtonGroup>
      </Grid>
    </Layout>
  );
};

export default JoinPage;
