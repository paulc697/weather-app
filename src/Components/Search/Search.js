import React, { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";
import ListItemText from "@material-ui/core/ListItemText";
import "./search.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 1500,
    backgroundColor: "#989898",
  },
  text: {
    color: "#FFFFFF",
  },
}));
const Search = () => {
  const classes = useStyles();
  const [input, setInput] = useState("");
  const [searchData, setSearchData] = useState({});
  const [data, setData] = useState(false);
  // const [latitude, setLatitude] = useState("");
  // const [longitude, setLongitude] = useState("");

  // const getLocation = () => {
  //   navigator.geolocation.getCurrentPosition(function (position) {
  //     setLatitude(position.coords.latitude);
  //     setLongitude(position.coords.longitude);
  //   });
  //   Geocode.fromLatLng(latitude, longitude).then(
  //     (response) => {
  //       const address = response.results[0].formatted_address;
  //       setLocation(address);
  //     },
  //     (error) => {
  //       console.error(error);
  //     }
  //   );
  // };

  //Search event
  const weatherInput = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SEARCH_API}=${input}`).then((data) => {
      setSearchData(data.data);
      setData(true);
    });
  }, [input]);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <div className="wrap">
          <form autocomplete="off" action={`/search/${input}`}>
            <input
              className="searchTerm"
              onChange={weatherInput}
              type="text"
              placeholder="Type in a city, country or postcode"
            />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                {data === true &&
                  searchData.map((location, key) => {
                    return (
                      <div className={classes.root}>
                        <List dense={true} key={location.id}>
                          <Link
                            to={`/search/${location.name.split(",")[0]}`}
                            component={RouterLink}
                            underline="none"
                          >
                            <ListItem button>
                              <ListItemText
                                className={classes.text}
                                inset
                                primary={
                                  location.name.split(",")[0] +
                                  ", " +
                                  location.country
                                }
                              />
                            </ListItem>
                          </Link>
                        </List>
                      </div>
                    );
                  })}
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default Search;
