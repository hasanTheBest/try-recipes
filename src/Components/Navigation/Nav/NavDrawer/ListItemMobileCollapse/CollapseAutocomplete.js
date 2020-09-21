import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ContextSetting } from "../../../../../Context/ContextSetting";
import { Box, Collapse, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

import parse from "autosuggest-highlight/parse";
import match from "autosuggest-highlight/match";

const CollapseAutocomplete = ({ open, options }) => {
  let history = useHistory();
  const { toggleDrawer } = useContext(ContextSetting);

  const handleAutocompleteChange = (e, value) => {
    if (value) {
      history.push(`/ingredient/${value.strIngredient}`);
      toggleDrawer(false);
    }
  };
  return (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Box p={1}>
        <Autocomplete
          autoComplete
          id="highlights-ingredient"
          options={options}
          getOptionLabel={({ strIngredient }) => strIngredient}
          size="small"
          onChange={handleAutocompleteChange}
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
  );
};

export default CollapseAutocomplete;
