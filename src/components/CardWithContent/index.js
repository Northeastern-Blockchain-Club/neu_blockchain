import * as React from "react";

import { Typography } from "@material-ui/core";

// import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Grid from "@material-ui/core/Grid";

import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";

import "./index.scss";

const CardWithContent = ({ title, body, date, time, where, link, share }) => {
  // share is either a string url or a null.
  const isSharable = !share;

  return (
    <>
      <Card className="card" variant="outlined">
        <CardContent>
          <Typography
            variant="h5"
            color="text-secondary"
            className="text-center"
          >
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {body}
          </Typography>

          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item xs={6} className="center-text">
              <Typography variant="body1" component="p">
                {time} ET
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" component="p">
                {date}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" component="p">
                {where}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          {/* <Button size="small"> Learn More </Button> */}
          <IconButton
            aria-label="share"
            disabled={isSharable}
            onClick={() => {
              window.open(share);
            }}
          >
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </>
  );
};

export default CardWithContent;
