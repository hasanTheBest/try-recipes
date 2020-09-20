import React from "react";
import { Link as RouterLink } from "react-router-dom";
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
          component={RouterLink}
          to={`/search/${tag}`}
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
          component={RouterLink}
          to={`/area/${strArea}`}
        >
          {strArea}
        </Button>
        <Button
          variant="text"
          startIcon={<Category />}
          color="default"
          component={RouterLink}
          to={`/category/${strCategory}`}
        >
          {strCategory}
        </Button>
        {strTags && (
          <Typography component="span">
            <IconButton aria-label="Icon">
              <LocalOffer />
            </IconButton>
            <RenderTags tags={strTags} />
          </Typography>
        )}
      </Paper>
    </Box>
  );
};

export default RecipeMetaBar;
