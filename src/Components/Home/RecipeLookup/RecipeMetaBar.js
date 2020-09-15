import React from "react";
import { Box, Button, IconButton, Paper, Typography } from "@material-ui/core";
import { Category, Explore, LocalOffer } from "@material-ui/icons";

function RenderTags({ tags }) {
  const arrTags = tags.split(",");
  return (
    <>
      {arrTags.map((tag, i) => (
        <Button
          key={i}
          size="small"
          variant="text"
          color="default"
          // onClick={(e) => tagFilter(e, tag, history)}
        >
          {tag}
        </Button>
      ))}
    </>
  );
}

const RecipeMetaBar = ({ meal: { strArea, strCategory, strTags } }) => {
  return (
    <Box mt={4}>
      <Paper style={{ paddingLeft: 16 }} elevation={3}>
        <Button
          variant="text"
          color="default"
          startIcon={<Explore />}
          title="Area"
          // onClick={(e) => {
          //   onAreaFilter(e, meal.strArea);
          // }}
        >
          {strArea}
        </Button>
        <Button
          variant="text"
          startIcon={<Category />}
          color="default"
          // onClick={(e) => {
          //   categoryFilter(e, false, meal.strCategory);
          // }}
        >
          {strCategory}
        </Button>
        {strTags && (
          <Typography component="span">
            <IconButton aria-label="Icon">
              <LocalOffer />
            </IconButton>
            <RenderTags
              tags={strTags}
              // tagFilter={tagFilter}
              // history={history}
            />
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default RecipeMetaBar;
