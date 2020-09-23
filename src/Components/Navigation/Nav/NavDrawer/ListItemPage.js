import React, { useContext } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Category,
  ContactMail,
  EditLocation,
  EmojiNature,
  Home,
} from "@material-ui/icons";
import { ContextSetting } from "../../../../Context/ContextSetting";

const ListItemPage = () => {
  const { pathname } = useLocation();
  const { toggleDrawer } = useContext(ContextSetting);

  const handleClick = () => {
    toggleDrawer(false);
  };
  return (
    <List onClick={handleClick}>
      <ListItem
        button
        to="/"
        component={RouterLink}
        selected={"/" === pathname}
      >
        <ListItemIcon>
          <Home />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
      <ListItem
        button
        to="/categories"
        component={RouterLink}
        selected={"/categories" === pathname}
      >
        <ListItemIcon>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Categories" />
      </ListItem>
      <ListItem
        button
        to="/ingredients"
        component={RouterLink}
        selected={"/ingredients" === pathname}
      >
        <ListItemIcon>
          <EmojiNature />
        </ListItemIcon>
        <ListItemText primary="Ingredients" />
      </ListItem>
      <ListItem
        button
        to="/areas"
        component={RouterLink}
        selected={"/areas" === pathname}
      >
        <ListItemIcon>
          <EditLocation />
        </ListItemIcon>
        <ListItemText primary="Areas" />
      </ListItem>
      <ListItem
        button
        to="/about"
        component={RouterLink}
        selected={"/about" === pathname}
      >
        <ListItemIcon>
          <ContactMail />
        </ListItemIcon>
        <ListItemText primary="About" />
      </ListItem>
    </List>
  );
};

export default ListItemPage;
