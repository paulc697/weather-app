import React from "react";
import Grid from "@material-ui/core/Grid";
import { SYMBOLS, TIME_FORMAT } from "../../Constants/Constants";
import format from "date-fns/format";

import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import useIsMobile from "../../Components/useIsMobile/useIsMobile";
import useStyles from "./styles";

const HourlyWeather = ({ tabNumber, forecastday, degrees }) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  return (
    <Grid item xs={12}>
      <div className={classes.root}>
        <GridList
          className={classes.gridList}
          cols={isMobile ? 4 : 14}
          cellHeight={160}
        >
          {forecastday.hour.map((hourly, index) => {
            return (
              <GridListTile key={hourly.condition.icon}>
                <img
                  src={hourly.condition.icon}
                  alt="weather"
                  className={classes.media}
                />
                <GridListTileBar
                  title={format(new Date(hourly.time), TIME_FORMAT)}
                  subtitle={
                    degrees
                      ? hourly.temp_c + SYMBOLS.DEGREES
                      : hourly.temp_f + SYMBOLS.FAHRENHEIT
                  }
                  classes={{
                    root: classes.titleBar,
                    title: classes.title,
                  }}
                />
              </GridListTile>
            );
          })}
        </GridList>
      </div>
    </Grid>
  );
};

export default HourlyWeather;
