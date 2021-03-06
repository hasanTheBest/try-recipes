import React, { useEffect, useState } from "react";
// Router
import { Link as RouterLink, useLocation } from "react-router-dom";
// Material UI Components
import { makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import categories from "../../../data/category_list.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CategoryBar() {
  const classes = useStyles();
  const [value, setValue] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes("/category/")) {
      setValue(pathname.split("/")[pathname.split("/").length - 1]);
    } else {
      setValue("");
    }
  }, [pathname]);

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab style={{ display: "none" }} label="placeholder" value="" />
          {categories.meals.map(({ strCategory }, i) => (
            <Tab
              key={String(i)}
              index={i}
              label={strCategory}
              value={strCategory}
              component={RouterLink}
              to={`/category/${strCategory}`}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
