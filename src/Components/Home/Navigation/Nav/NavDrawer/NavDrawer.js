import React from "react";
// Material UI
import {
  SwipeableDrawer,
  Divider,
  Hidden,
  makeStyles,
} from "@material-ui/core";

// Components
import ListItemPage from "./ListItemPage";
import ThemeModeSwitch from "./ThemeModeSwitch";
import ListItemMobile from "./ListItemMobile";

// STYLES
const styles = makeStyles((theme) => ({
  drawerList: {
    width: "300px",
  },
}));

export default function NavDrawer() {
  const classes = styles();

  return (
    <>
      {/* DRAWER LEFT */}
      <div className={classes.drawer}>
        <SwipeableDrawer
          anchor="left"
          open={false}
          // onClose={toggleDrawer("left", false)}
          // onOpen={toggleDrawer("left", false)}
        >
          <div className={classes.drawerList} role="presentation">
            {/* Visible only 600px and down */}
            <Hidden smUp>
              <ListItemMobile />
              <Divider />
            </Hidden>

            <ListItemPage />

            <Hidden mdUp>
              <Divider />
              <ThemeModeSwitch />
            </Hidden>
          </div>
        </SwipeableDrawer>
      </div>
    </>
  );
}
