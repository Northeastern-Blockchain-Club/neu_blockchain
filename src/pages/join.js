import * as React from "react";
import Layout from "../components/Layout";

import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import CardWithContent from "../components/CardWithContent";

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
        <Button
          variant="outlined"
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7hX7MGJ7ShZSe2ZhuIajLmXBfiFseyKC28oGxMATNM_bkYw/viewform"
        >
          {" "}
          Join the Mailing List{" "}
        </Button>
      </Grid>
    </Layout>
  );
};

export default JoinPage;
