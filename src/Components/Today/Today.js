import React, { useEffect, useState } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import useStyles from "../../Pages/SearchDetails/styles";
import format from "date-fns/format";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { SYMBOLS, VALID_DATE_FORMAT } from "../../Constants/Constants";
import useIsMobile from "../useIsMobile/useIsMobile";

const Today = ({ weather, degrees, forecast, isForecast, dailyForecast }) => {
  const classes = useStyles();
  const isMobile = useIsMobile();
  const [validDate, setValidDate] = useState("");

  const dateToday = () => {
    const date = format(new Date(), VALID_DATE_FORMAT);
    setValidDate(date);
  };

  useEffect(() => {
    dateToday();
  }, []);

  return (
    <>
      <Grid container spacing={2} direction="row" justify="space-around">
        <Grid item md={1} xs={6}>
          <Box>
            <img
              className={classes.media}
              src={weather.current.condition.icon}
              alt="weather"
            ></img>
          </Box>
        </Grid>
        <Grid item md={2} xs={6}>
          <Typography className={classes.degrees}>
            {degrees
              ? weather.current.temp_c + SYMBOLS.DEGREES
              : weather.current.temp_f + SYMBOLS.FAHRENHEIT}
          </Typography>
          <Typography className={classes.condition}>
            {weather.current.condition.text}
          </Typography>
        </Grid>
        <Grid item md={6} xs={9}>
          {forecast &&
            isForecast === true &&
            dailyForecast.forecastday.map((forecastday) => {
              return (
                <>
                  {validDate === forecastday.date ? (
                    <Card className={classes.root} raised>
                      <CardContent>
                        <Box
                          mb={2}
                          ml={isMobile ? 0 : 4}
                          mr={isMobile ? 0 : -4}
                        >
                          <Grid container spacing={2} justify="space-between">
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {degrees
                                  ? forecastday.day.mintemp_c + SYMBOLS.DEGREES
                                  : forecastday.day.mintemp_f +
                                    SYMBOLS.FAHRENHEIT}{" "}
                              </Typography>
                              <Typography className={classes.subText}>
                                Low
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {degrees
                                  ? forecastday.day.maxwind_mph + " mph"
                                  : forecastday.day.maxwind_kph + " kph"}
                              </Typography>
                              <Typography className={classes.subText}>
                                Wind
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {forecastday.astro.sunrise}
                              </Typography>
                              <Typography className={classes.subText}>
                                Sunrise
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>

                        <Box ml={isMobile ? 0 : 4} mr={isMobile ? 0 : -4}>
                          <Grid container spacing={2} justify="space-between">
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {degrees
                                  ? forecastday.day.maxtemp_c + SYMBOLS.DEGREES
                                  : forecastday.day.maxtemp_f +
                                    SYMBOLS.FAHRENHEIT}
                              </Typography>
                              <Typography className={classes.subText}>
                                High
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {degrees
                                  ? forecast.current.feelslike_c +
                                    SYMBOLS.DEGREES
                                  : forecast.current.feelslike_f +
                                    SYMBOLS.FAHRENHEIT}
                              </Typography>
                              <Typography className={classes.subText}>
                                Feels Like
                              </Typography>
                            </Grid>
                            <Grid item xs={4}>
                              <Typography className={classes.subTitle}>
                                {forecastday.astro.sunset}
                              </Typography>
                              <Typography className={classes.subText}>
                                Sunset
                              </Typography>
                            </Grid>
                          </Grid>
                        </Box>
                      </CardContent>
                    </Card>
                  ) : null}
                </>
              );
            })}
        </Grid>
      </Grid>
    </>
  );
};

export default Today;
