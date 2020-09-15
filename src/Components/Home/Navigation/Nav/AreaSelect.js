import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Button,
  InputLabel,
  MenuItem,
  Select,
  Link,
  FormControl,
  makeStyles,
} from "@material-ui/core";
import { TuneRounded, ExpandMoreRounded } from "@material-ui/icons";
// Data
import areas from "../../../../data/area_list.json";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    visibility: "hidden",
  },
}));

const AreaSelect = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  // Select Component
  const handleCloseSelect = () => {
    setOpen(false);
  };
  const handleOpenSelect = () => {
    setOpen(true);
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenSelect}
        endIcon={<ExpandMoreRounded />}
      >
        {<TuneRounded />}
      </Button>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">Area</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleCloseSelect}
          onOpen={handleOpenSelect}
          value=""
          // onChange={(e) => onAreaFilter(e, 0, history)}
        >
          <MenuItem value="">
            <em>Area</em>
          </MenuItem>
          {areas.meals.map(({ strArea }, i) => (
            <MenuItem key={String(i)} value={strArea}>
              <Link to={`/area/${strArea}`} component={RouterLink}>
                {strArea}
              </Link>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </>
  );
};

export default AreaSelect;
