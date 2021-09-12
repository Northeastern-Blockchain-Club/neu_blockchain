import * as React from "react"
import Layout from "../components/Layout"

import { Typography } from "@material-ui/core"
import Grid from "@material-ui/core/Grid"

import CardWithContent from "../components/CardWithContent"

const EventsPage = () => {
  return (
    <Layout>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
            <CardWithContent title={"There's nothing here..."} body={""}>
            </CardWithContent>
      
      </Grid>
    </Layout>
  )
}

export default EventsPage