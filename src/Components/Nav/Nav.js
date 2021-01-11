import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import { Link as RouterLink } from "react-router-dom";
import "./header.css";
import Grid from "@material-ui/core/Grid";
import useStyles from "./styles";

const Nav = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.margins}>
      <AppBar position="absolute">
        <div className="header">
          <div className="logo-nav">
            <div className="logo-container">
              <Link to="/" underline="none" component={RouterLink}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className={classes.logo}
                >
                  Weather
                </IconButton>
              </Link>
              <Link to="/favourites" underline="none" component={RouterLink}>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  className={classes.logo}
                >
                  Favourites
                </IconButton>
              </Link>
            </div>
          </div>
        </div>
      </AppBar>
    </Grid>
  );
};

export default Nav;
