import * as React from "react";
import Layout from "../components/Layout";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import CardWithContent from "../components/CardWithContent";

// this is where json data for each event is pulled from.
import JSONData from "../data/events/events.json";

const EventCard = () => (
  <>
    {JSONData.map((data) => {
      return (
        <>
          <CardWithContent
            title={data.title}
            body={data.body}
            date={data.date}
            time={data.time}
            where={data.where}
            share={data.share}
          />
          <br />
        </>
      );
    })}
  </>
);

const EventsPage = () => {
  return (
    <Layout>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" className="header-text">
          {" "}
          Upcoming Events
        </Typography>
        <EventCard />
      </Grid>
    </Layout>
  );
};

export default EventsPage;
