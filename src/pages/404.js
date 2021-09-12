import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import Grid from "@material-ui/core/Grid";

import { Typography } from "@material-ui/core";

const NotFoundPage = () => {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12}>
          <Typography variant="p">
            Nothing seems to be here. Try again?
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/"> Home</Link>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default NotFoundPage;
