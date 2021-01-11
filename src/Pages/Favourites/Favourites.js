import { Typography } from "@material-ui/core";
import useStyles from "../../Pages/SearchDetails/styles";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
const Favourites = () => {
  const classes = useStyles();
  const [favourite, setFavourite] = useState(false);
  const [location, setLocation] = useState([]);

  useEffect(() => {
    try {
      const item = Object.keys(localStorage);

      if (item) {
        const value = Object.values(localStorage);
        setLocation(value);

        setFavourite(true);
      }
    } catch (error) {
      setFavourite(false);
      console.log(error);
    }
  }, []);

  return (
    <>
      <Grid container spacing={2} direction="column" justify="space-around">
        <Grid item xs={12}>
          <Typography className={classes.title}>Your Favourites</Typography>
        </Grid>
        {favourite ? (
          location.map((name) => {
            return (
              <>
                <Grid item xs={6}>
                  <Link
                    to={`/search/${name}`}
                    component={RouterLink}
                    underline="none"
                  >
                    <Typography variant="h3">{name}</Typography>
                  </Link>
                </Grid>
              </>
            );
          })
        ) : (
          <Typography variant="h3">No favourites found</Typography>
        )}
      </Grid>
    </>
  );
};

export default Favourites;
