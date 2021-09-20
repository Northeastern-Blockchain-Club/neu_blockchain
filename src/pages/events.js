import * as React from "react";
import Layout from "../components/Layout";

import { Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

import CardWithContent from "../components/CardWithContent";

// this is where json data for each event is pulled from.
import upcoming from "../data/events/upcoming.json";
import previous from "../data/events/previous.json";

const EventCard = ({ data }) => (
  <>
    {data.map((d) => {
      return (
        <>
          <CardWithContent
            title={d.title}
            body={d.body}
            date={d.date}
            time={d.time}
            where={d.where}
            share={d.share}
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
        <EventCard data={upcoming} />
      </Grid>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" className="header-text">
          {" "}
          Previous Events
        </Typography>
        <EventCard data={previous} />
      </Grid>
    </Layout>
  );
};

export default EventsPage;
