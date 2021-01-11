import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import {
  SHORT_DATE_FORMAT,
  VALID_DATE_FORMAT,
  LONG_DATE_TIME_FORMAT,
  LONG_DATE_FORMAT,
  SYMBOLS,
} from "../../Constants/Constants";
import useStyles from "./styles";
import Grid from "@material-ui/core/Grid";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import format from "date-fns/format";
import HourlyWeather from "../../Components/HourlyWeather/HourlyWeather";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import { DatePicker } from "@material-ui/pickers";
import Today from "../../Components/Today/Today";
import StarOutlineIcon from "@material-ui/icons/StarOutline";
import StarIcon from "@material-ui/icons/Star";
import Button from "@material-ui/core/Button";
import useIsMobile from "../../Components/useIsMobile/useIsMobile";
import History from "../../Components/History/History";

import Search from "../../Components/Search/Search";

const SearchDetails = () => {
  const isMobile = useIsMobile();
  const classes = useStyles();
  const [weather, setWeather] = useState(null);
  const { location: urlGroupId } = useParams();
  const [location, setLocation] = useState("");
  const [isToday, setIsToday] = useState(true);
  const [days] = useState(3);
  const [isForecast, setIsForecast] = useState(false);
  const [dailyForecast, setDailyForecast] = useState({});
  const [forecast, setForecast] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [isHistory, setIsHistory] = useState(false);
  const [history, setHistory] = useState(null);
  const [selectedDate, handleDateChange] = useState(new Date());
  const [historyForecast, setHistoryForecast] = useState({});
  const [date, setDate] = useState(
    format(new Date(selectedDate), VALID_DATE_FORMAT)
  );

  const [degrees, setDegrees] = useState(true);
  const [farenheight, setFarenheight] = useState(false);
  const [isFavourite, setIsFavourite] = useState(false);

  useEffect(() => {
    if (urlGroupId) {
      setLocation(urlGroupId);
    }
  }, [urlGroupId]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const getHistory = useCallback(async () => {
    const newDate = new Date(selectedDate).toISOString().split("T")[0];
    setDate(newDate);
    axios
      .get(`${process.env.REACT_APP_HISTORY_API}=${location}&dt=${date}`)
      .then((data) => {
        setHistoryForecast(data.data.forecast);
        setIsHistory(true);
        setHistory(data.data);
      })
      .catch((error) => console.log(error));
  }, [location, selectedDate, date]);

  const getToday = useCallback(async () => {
    axios
      .get(`${process.env.REACT_APP_WEATHER_API}=${location}`)
      .then((data) => {
        setWeather(data.data);
        setIsToday(true);
      })
      .catch((error) => console.log(error));
  }, [location]);

  const getForecast = useCallback(async () => {
    axios
      .get(`${process.env.REACT_APP_FORECAST_API}=${location}&days=${days}`)
      .then((data) => {
        setForecast(data.data);
        setDailyForecast(data.data.forecast);

        setIsForecast(true);
      })

      .catch((error) => console.log(error));
  }, [days, location]);

  useEffect(() => {
    if (location !== "") {
      getToday();
      getForecast();
      getHistory();
    }
  }, [location, getForecast, getHistory, getToday]);

  useEffect(() => {
    try {
      if (weather) {
        const item = localStorage.getItem(weather.location.name, location);
        if (item === weather.location.name) {
          setIsFavourite(true);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }, [location, weather]);

  const setDegree = () => {
    setDegrees(true);
    setFarenheight(false);
  };

  const setFaren = () => {
    setDegrees(false);
    setFarenheight(true);
  };

  useEffect(() => {
    if (isFavourite === true) {
      localStorage.setItem(weather.location.name, location);
    }
  });

  useEffect(() => {
    if (weather && isFavourite === false) {
      localStorage.removeItem(weather.location.name);
    }
  });

  const favourite = () => {
    if (isFavourite !== true) {
      setIsFavourite(true);
    } else {
      setIsFavourite(false);
    }
  };

  return (
    <Grid container spacing={2} direction="row" justify="space-around">
      {weather === null ? (
        <>
          <Grid item xs={12}>
            <Typography
              className={isMobile ? classes.mobileTitle : classes.title}
            >
              No results found{" "}
            </Typography>
          </Grid>
          <Search />
        </>
      ) : (
        <>
          <Grid item xs={12}>
            {weather && isToday ? (
              <>
                <Grid item xs={12}>
                  <Box mt={2}>
                    <Typography
                      className={isMobile ? classes.mobileTitle : classes.title}
                    >
                      Today in {weather.location.name}, {""}{" "}
                      {weather.location.country}
                      <Button onClick={favourite}>
                        {isFavourite ? <StarIcon /> : <StarOutlineIcon />}
                      </Button>
                    </Typography>
                  </Box>
                </Grid>

                <Grid item xs={12}>
                  <Typography variant="h5" className={classes.time}>
                    Last Updated: {""}
                    {format(
                      new Date(weather.current.last_updated),
                      LONG_DATE_TIME_FORMAT
                    )}
                  </Typography>
                </Grid>

                <Grid container spacing={2} direction="row">
                  <Grid item xs={9}>
                    <Box mb={2} mt={2}>
                      <Typography variant="h5" className={classes.subTitle}>
                        {format(
                          new Date(weather.location.localtime),
                          LONG_DATE_FORMAT
                        )}
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={3}>
                    <Button
                      variant="text"
                      size="small"
                      onClick={setDegree}
                      className={
                        degrees ? classes.buttonActive : classes.buttonInactive
                      }
                    >
                      {SYMBOLS.DEGREES}
                    </Button>
                    <Button
                      variant="text"
                      size="small"
                      onClick={setFaren}
                      className={
                        farenheight
                          ? classes.buttonActive
                          : classes.buttonInactive
                      }
                    >
                      {SYMBOLS.FAHRENHEIT}
                    </Button>
                  </Grid>
                </Grid>
                <Today
                  weather={weather}
                  degrees={degrees}
                  forecast={forecast}
                  isForecast={isForecast}
                  dailyForecast={dailyForecast}
                />
              </>
            ) : (
              <Typography>No Results Found</Typography>
            )}
          </Grid>

          <Grid container spacing={2} direction="row" justify="space-between">
            {isForecast === true ? (
              <Grid item xs={12}>
                <Grid item xs={12}>
                  <Box mt={2} ml={1}>
                    <Typography
                      className={isMobile ? classes.mobileTitle : classes.title}
                    >
                      Forecast
                    </Typography>
                  </Box>
                </Grid>
                <Tabs
                  value={activeTab}
                  className={classes.tabs}
                  onChange={handleTabChange}
                  indicatorColor="primary"
                  aria-label="Weather Tab"
                  variant="scrollable"
                >
                  {dailyForecast.forecastday.map((forecastday, index) => {
                    return (
                      <Tab
                        key={`${forecastday.date}_tab_${index}`}
                        label={format(
                          new Date(forecastday.date),
                          SHORT_DATE_FORMAT
                        )}
                      />
                    );
                  })}
                </Tabs>
              </Grid>
            ) : (
              <Typography>No forecast Available</Typography>
            )}

            <Grid container spacing={2}>
              <Grid item xs={12}>
                {forecast &&
                  isForecast === true &&
                  dailyForecast.forecastday.map((forecastday, index) => {
                    return (
                      <React.Fragment
                        key={`display_weather_details_${forecastday.date}`}
                      >
                        {activeTab === index && (
                          <HourlyWeather
                            tabNumber={index}
                            degrees={degrees}
                            forecastday={forecastday}
                          />
                        )}
                      </React.Fragment>
                    );
                  })}
              </Grid>
            </Grid>
          </Grid>

          <Grid container justify="space-around">
            {/* HISTORY */}
            {history && isHistory ? (
              <Grid item xs={12}>
                <Box mt={4} mb={2} ml={1}>
                  <Typography
                    className={isMobile ? classes.mobileTitle : classes.title}
                  >
                    View History
                  </Typography>
                </Box>
                <Grid item xs={12}>
                  <Box ml={1}>
                    <DatePicker
                      label="Select Date"
                      autoOk
                      disableFuture
                      disableToolbar
                      maxDate={new Date()}
                      format="yyyy/MM/dd"
                      value={date}
                      invalidDateMessage="noooooo"
                      onChange={(date) => handleDateChange(date)}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <History
                    degrees={degrees}
                    historyForecast={historyForecast}
                    isHistory={true}
                  />
                </Grid>
              </Grid>
            ) : null}
          </Grid>
        </>
      )}
    </Grid>
  );
};
export default SearchDetails;
