import * as React from "react"
import Layout from "../components/Layout"

import { Typography } from "@material-ui/core"
import Card from "@material-ui/core/Card"
import Grid from "@material-ui/core/Grid"


const EventsPage = () => {
  return (
    <Layout>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
       <Card className="card" variant="outlined"  component="h2">
           <Typography variant="h5">
                There's nothing here...
            </Typography>
       </Card>
      </Grid>
    </Layout>
  )
}

export default EventsPage
