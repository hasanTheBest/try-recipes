import React from "react";
import { useLocation } from "react-router-dom";
import { LabelOutlined } from "@material-ui/icons";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListItemMobileCollapse = ({ open, items, itemName }) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List
        component="div"
        disablePadding
        // onClick={toggleDrawer("left", false)}
      >
        {items.map((item) => {
          return (
            <ListItem
              button
              className={classes.nested}
              selected={`/${itemName}/${Object.values(item)[0]}` === pathname}
              // onClick={(e) => categoryFilter("", strCategory, history)}
            >
              <ListItemIcon>
                <LabelOutlined />
              </ListItemIcon>
              <ListItemText primary={Object.values(item)[0]} />
            </ListItem>
          );
        })}
      </List>
    </Collapse>
  );
};

export default ListItemMobileCollapse;
