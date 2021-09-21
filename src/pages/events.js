import * as React from "react";
import Layout from "../components/Layout";

import { DateTime } from "luxon";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import CardWithContent from "../components/CardWithContent";

// this is where json data for each event is pulled from.
import allData from "../data/events/events.json";

const EventCard = ({ data, upcoming }) => (
  <>
    {data
      .slice(0)
      .reverse()
      .map((d) => {
        if (upcoming == true && DateTime.fromISO(d.date) >= DateTime.now())
          return (
            <>
              <CardWithContent
                key={d.title}
                title={d.title}
                body={d.body}
                date={d.date}
                overview={d.overview}
                where={d.where}
                share={d.share}
              />
              <br />
            </>
          );
        else if (
          upcoming == false &&
          DateTime.fromISO(d.date) < DateTime.now()
        ) {
          return (
            <>
              <CardWithContent
                key={d.title}
                title={d.title}
                body={d.body}
                date={d.date}
                overview={d.overview}
                where={d.where}
                share={d.share}
              />
              <br />
            </>
          );
        }
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
          Upcoming Events
        </Typography>
        <EventCard data={allData} upcoming={true} />
      </Grid>{" "}
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4" className="header-text">
          Previous Events
        </Typography>
        <EventCard data={allData} upcoming={false} />
      </Grid>
    </Layout>
  );
};

export default EventsPage;
