import React from "react";
import { Skeleton } from "@material-ui/lab";
import { Grid } from "@material-ui/core";

const SkeletonRecipeItem = () => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            top: 0,
            width: "100%",
            height: "25px",
          }}
        >
          <Skeleton
            variant="circle"
            animation="wave"
            width="30%"
            height="100%"
            margin="0"
          />
          <Skeleton
            variant="circle"
            animation="wave"
            width="30%"
            height="100%"
            margin="0"
          />
        </div>
        <Skeleton
          variant="rect"
          animation="wave"
          style={{ height: 0, paddingTop: "66.25%" }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            width: "100%",
            height: "50px",
          }}
        >
          <Skeleton
            variant="text"
            animation="wave"
            width="100%"
            height="100%"
            margin="0"
          />
        </div>
      </div>
    </Grid>
  );
};

export default SkeletonRecipeItem;
