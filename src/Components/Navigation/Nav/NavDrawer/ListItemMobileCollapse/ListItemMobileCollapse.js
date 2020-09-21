import React, { useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { LabelOutlined } from "@material-ui/icons";
import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import { ContextSetting } from "../../../../../Context/ContextSetting";

const useStyles = makeStyles((theme) => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const ListItemMobileCollapse = ({ open, items, itemName }) => {
  const { pathname } = useLocation();
  const classes = useStyles();
  const { toggleDrawer } = useContext(ContextSetting);

  const handleClick = () => toggleDrawer(false);
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding onClick={handleClick}>
        {items.map((item) => {
          return (
            <ListItem
              button
              className={classes.nested}
              to={`/${itemName}/${Object.values(item)[0]}`}
              component={RouterLink}
              selected={`/${itemName}/${Object.values(item)[0]}` === pathname}
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
