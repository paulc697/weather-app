import React, { useEffect, useState } from "react";
import useStyles from "../../Pages/SearchDetails/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const FavouriteLocations = ({ location, isFavourite, weather }) => {
  const classes = useStyles();

  return (
    <Grid>
      {isFavourite ? (
        <Grid item xs={12}>
          <Box mt={2}>
            <Typography variant="h2" className={classes.title}>
              Today in {weather.location.name}, {""} {weather.location.country}
            </Typography>
          </Box>
        </Grid>
      ) : null}
    </Grid>
  );
};

export default FavouriteLocations;
