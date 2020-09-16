import React, { useState } from "react";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import {
  Category,
  EditLocation,
  EmojiNature,
  ExpandLess,
  ExpandMore,
} from "@material-ui/icons";

import { Autocomplete } from "@material-ui/lab";
import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

// Components
import ListItemMobileCollapse from "./ListItemMobileCollapse/ListItemMobileCollapse";
import categoryList from "../../../../../data/category_list.json";
import areaList from "../../../../../data/area_list.json";
import ingredients from "../../../../../data/ingredient_list.json";

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
      <Collapse in={openIngredients} timeout="auto" unmountOnExit>
        <Box p={1}>
          <Autocomplete
            autoComplete
            id="highlights-ingredient"
            options={ingredients.meals}
            getOptionLabel={({ strIngredient }) => strIngredient}
            size="small"
            // onChange={handleAutocompleteChange}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Search Ingredient"
                variant="filled" // outlined
                margin="normal"
              />
            )}
            renderOption={({ strIngredient }, { inputValue }) => {
              const matches = match(strIngredient, inputValue);
              const parts = parse(strIngredient, matches);

              return (
                <div>
                  {parts.map((part, index) => (
                    <span
                      key={index}
                      style={{
                        fontWeight: part.highlight ? 700 : 400,
                      }}
                    >
                      {part.text}
                    </span>
                  ))}
                </div>
              );
            }}
          />
        </Box>
      </Collapse>
    </List>
  );
};

export default ListItemMobile;
