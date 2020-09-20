import React, { Suspense } from "react";
import Recipes from "../Components/Home/Recipes";
import RecipeLookup from "../Components/Common/RecipeLookup";
import { LinearProgress } from "@material-ui/core";

const Home = () => {
  return (
    <div className="home-container">
      <Suspense fallback={<LinearProgress />}>
        <Recipes />
        <RecipeLookup random={true} />
      </Suspense>
    </div>
  );
};

export default Home;
