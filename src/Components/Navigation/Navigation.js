import React, { useContext } from "react";
// Router
import { Link as RouterLink } from "react-router-dom";
// Material UI
import {
  Hidden,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";

// Material UI Styles
import { makeStyles } from "@material-ui/core/styles";

// Material Icons
import MenuIcon from "@material-ui/icons/Menu";

// Components
import SearchField from "./Nav/SearchField";
import AreaSelect from "./Nav/AreaSelect";
import CategoryBar from "./Nav/CategoryBar";
import PopperLetterFilter from "./Nav/PopperLetterFilter";
import NavDrawer from "./Nav/NavDrawer/NavDrawer";
import HideOnScroll from "./HideOnScroll";
import ButtonNightMode from "./Nav/ButtonNightMode";
import { ContextSetting } from "../../Context/ContextSetting";

const useStyles = makeStyles((theme) => ({
  appTitle: {
    color: "inherit",
    "&:hover": {
      textDecoration: "none",
    },
  },
  root: {
    flexGrow: 1,
    marginBottom: "40px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },

  toolbar: {
    justifyContent: "space-between",
  },
  titleWrapper: {
    display: "inline-flex",
    alignItems: "center",
  },
  filterWrapper: {
    display: "inline-flex",
    alignItems: "center",
    width: "240px",
    overflow: "hidden",
    [theme.breakpoints.down("sm")]: {
      width: "auto",
    },
  },
  filterButton: {
    position: "relative",
    zIndex: 100,
    right: "-75px",
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const { toggleDrawer } = useContext(ContextSetting);
  const handleClick = () => toggleDrawer(true);

  return (
    <>
      <div className={classes.root}>
        <HideOnScroll>
          <AppBar position="static">
            <Toolbar className={classes.toolbar}>
              <div className={classes.titleWrapper}>
                <IconButton
                  edge="start"
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="open drawer"
                  onClick={handleClick}
                >
                  <MenuIcon />
                </IconButton>
                <Typography className={classes.title} variant="h6" noWrap>
                  <Link
                    to="/"
                    component={RouterLink}
                    className={classes.appTitle}
                  >
                    Recipes
                  </Link>
                </Typography>
              </div>
              <SearchField />
              <Hidden only="xs">
                <div className={classes.filterWrapper}>
                  <Hidden smDown>
                    <ButtonNightMode />
                  </Hidden>
                  <Box mr={2}>
                    <PopperLetterFilter />
                  </Box>
                  <Hidden smDown>
                    <AreaSelect />
                  </Hidden>
                </div>
              </Hidden>
            </Toolbar>
            {/* Category Bar */}
            <Hidden smDown>
              <CategoryBar />
            </Hidden>
          </AppBar>
        </HideOnScroll>
      </div>
      <NavDrawer />
    </>
  );
}
