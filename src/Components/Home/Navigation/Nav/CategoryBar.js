import React from "react";
// Router
import { useHistory } from "react-router-dom";
// Material UI Components
import { makeStyles, AppBar, Tabs, Tab } from "@material-ui/core";
import categories from "../../../../data/category_list.json";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function CategoryBar() {
  const classes = useStyles();
  let history = useHistory();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value="Beef"
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
          // onChange={(e, value) => categoryFilter(value, "", history)}
        >
          <Tab style={{ display: "none" }} label="placeholder" value="" />
          {categories.meals.map(({ strCategory }, i) => (
            <Tab
              key={String(i)}
              index={i}
              label={strCategory}
              value={strCategory}
            />
          ))}
        </Tabs>
      </AppBar>
    </div>
  );
}
