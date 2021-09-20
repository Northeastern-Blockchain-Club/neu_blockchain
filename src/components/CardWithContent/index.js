import * as React from "react";

import { Typography } from "@material-ui/core";

import { DateTime } from "luxon";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

import "./index.scss";

const CardWithContent = ({ title, body, date, where, link, share }) => {
  // share is either a string url or a null.
  const isSharable = !share;
  const formattedDate = DateTime
    .fromISO(date)
    .setZone()
    .toLocaleString(DateTime.DATETIME_MED);
  return (
    <>
      <Card className="card" variant="outlined">
        <CardContent>
          <Grid item xs={12}>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="text-secondary"
              className="bold"
            >
              {title}
            </Typography>
          </Grid>
          <hr />
          <br />
          <Typography variant="h6" component="p">
            {body}
          </Typography>
          <Typography variant="body1" component="p">
            {formattedDate}
          </Typography>
          <br />
          <Typography variant="body1" component="p">
            {where}
          </Typography>
        </CardContent>

        {/* <CardActions>
           <Button size="small"> Learn More </Button>
          <IconButton
            aria-label="share"
            disabled={isSharable}
            onClick={() => {
              window.open(share);
            }}
          >
            <ShareIcon />
          </IconButton> 
        </CardActions> */}
      </Card>
    </>
  );
};

export default CardWithContent;
