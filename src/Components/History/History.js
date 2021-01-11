import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { SYMBOLS } from "../../Constants/Constants";
import useStyles from "../../Pages/SearchDetails/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import useIsMobile from "../useIsMobile/useIsMobile";
const History = ({ historyForecast, degrees }) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  return (
    <Grid container direction="row" justify="space-around">
      {historyForecast.forecastday.map((history) => {
        return (
          <>
            <Grid item md={1} xs={6}>
              <Box>
                <img
                  className={classes.media}
                  src={history.day.condition.icon}
                  alt="weather"
                ></img>
              </Box>
            </Grid>
            <Grid item md={2} xs={6}>
              <Typography className={classes.degrees}>
                {degrees
                  ? history.day.avgtemp_c + SYMBOLS.DEGREES
                  : history.day.avgtemp_f + SYMBOLS.FAHRENHEIT}
              </Typography>
              <Typography className={classes.condition}>
                {history.day.condition.text}
              </Typography>
            </Grid>

            <Grid item md={6} xs={9}>
              <Card className={classes.root} raised>
                <CardContent>
                  <Box ml={isMobile ? 0 : 4} mr={isMobile ? 0 : -4}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {degrees
                            ? history.day.mintemp_c + SYMBOLS.DEGREES
                            : history.day.mintemp_f + SYMBOLS.FAHRENHEIT}
                        </Typography>
                        <Typography className={classes.subText}>Low</Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {degrees
                            ? history.day.maxwind_mph + " mph"
                            : history.day.maxwind_kph + " kph"}
                        </Typography>
                        <Typography className={classes.subText}>
                          Wind
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {history.astro.sunrise}
                        </Typography>
                        <Typography className={classes.subText}>
                          Sunrise
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box ml={isMobile ? 0 : 4} mr={isMobile ? 0 : -4}>
                    <Grid container spacing={2}>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {degrees
                            ? history.day.maxtemp_c + SYMBOLS.DEGREES
                            : history.day.maxtemp_f + SYMBOLS.FAHRENHEIT}
                        </Typography>
                        <Typography className={classes.subText}>
                          High
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {degrees
                            ? history.day.avgtemp_c + SYMBOLS.DEGREES
                            : history.day.avgtemp_f + SYMBOLS.FAHRENHEIT}
                        </Typography>

                        <Typography className={classes.subText}>
                          Average Temp
                        </Typography>
                      </Grid>
                      <Grid item xs={4}>
                        <Typography className={classes.subTitle}>
                          {history.astro.sunset}
                        </Typography>
                        <Typography className={classes.subText}>
                          Sunset
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </>
        );
      })}
    </Grid>
  );
};

export default History;
