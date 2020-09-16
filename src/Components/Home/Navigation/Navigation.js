import React, { useState } from "react";
// Router
import { useHistory, Link as RouterLink } from "react-router-dom";
// Material UI
import {
  Hidden,
  Button,
  Box,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@material-ui/core";

// Material UI Styles
import { fade, makeStyles } from "@material-ui/core/styles";
import spacing from "@material-ui/system";

// Material Icons
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";

// Components
import SearchField from "./Nav/SearchField";
import AreaSelect from "./Nav/AreaSelect";
import CategoryBar from "./Nav/CategoryBar";
import PopperLetterFilter from "./Nav/PopperLetterFilter";
import NavDrawer from "./Nav/NavDrawer/NavDrawer";

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

export default function Nav({
  categoryFilter,
  handleClickFilterLetter,
  tabs,
  handleChangeSwitch,
}) {
  const classes = useStyles();
  let history = useHistory();

  // STATE

  const [openDrawer, setOpenDrawer] = useState(false);

  // Drawer Component
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
            <div className={classes.titleWrapper}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer("left", true)}
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
                  <Box mr={1}>
                    <Button
                      aria-label="Night mode toggle"
                      onClick={handleChangeSwitch}
                      color="primary"
                      variant="contained"
                    >
                      {<Brightness4Icon />}
                    </Button>
                  </Box>
                </Hidden>
                <Box mr={2}>
                  <PopperLetterFilter
                    handleClickFilterLetter={handleClickFilterLetter}
                  />
                </Box>
                <Hidden smDown>
                  <AreaSelect />
                </Hidden>
              </div>
            </Hidden>
          </Toolbar>
          {/* Category Bar */}
          <Hidden smDown>
            <CategoryBar categoryFilter={categoryFilter} tabs={tabs} />
          </Hidden>
        </AppBar>
      </div>
      <NavDrawer
        openDrawer={openDrawer}
        setOpenDrawer={setOpenDrawer}
        toggleDrawer={toggleDrawer}
      />
    </>
  );
}
