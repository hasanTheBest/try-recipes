import React, { useState } from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import {
  Category,
  EditLocation,
  EmojiNature,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";

// Components
import CollapseAutocomplete from "./ListItemMobileCollapse/CollapseAutocomplete";
import ListItemMobileCollapse from "./ListItemMobileCollapse/ListItemMobileCollapse";
import categoryList from "../../../../data/category_list.json";
import areaList from "../../../../data/area_list.json";
import ingredients from "../../../../data/ingredient_list.json";

const ListItemMobile = () => {
  // STATE
  const [openCategories, setOpenCategories] = useState(false);
  const [openAreas, setOpenAreas] = useState(false);
  const [openIngredients, setOpenIngredients] = useState(false);

  const handleMenuItemClick = (name) => {
    // Keep open drawer
    // setOpenDrawer(false);
    switch (name) {
      case "categories":
        setOpenCategories(!openCategories);
        break;
      case "areas":
        setOpenAreas(!openAreas);
        break;
      case "ingredients":
        setOpenIngredients(!openIngredients);
        break;
      default:
        setOpenIngredients(openIngredients);
    }
  };

  return (
    <List>
      <ListItem button onClick={(e) => handleMenuItemClick("categories")}>
        <ListItemIcon>
          <Category />
        </ListItemIcon>
        <ListItemText primary="Categories" />
        {openCategories ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItemMobileCollapse
        open={openCategories}
        items={categoryList.meals}
        itemName="category"
      />

      <ListItem button onClick={(e) => handleMenuItemClick("areas")}>
        <ListItemIcon>
          <EditLocation />
        </ListItemIcon>
        <ListItemText primary="Areas" />
        {openAreas ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <ListItemMobileCollapse
        open={openAreas}
        itemName="area"
        items={areaList.meals}
      />

      <ListItem button onClick={(e) => handleMenuItemClick("ingredients")}>
        <ListItemIcon>
          <EmojiNature />
        </ListItemIcon>
        <ListItemText primary="Ingredients" />
        {openIngredients ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <CollapseAutocomplete
        open={openIngredients}
        options={ingredients.meals}
      />
    </List>
  );
};

export default ListItemMobile;
