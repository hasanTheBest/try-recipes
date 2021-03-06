import React, { Suspense } from "react";
import Recipes from "../Components/Home/Recipes";
import RecipeLookup from "../Components/Common/RecipeLookup";
import CircularBackdrop from "../Components/Common/CircularBackdrop";

const Home = () => {
  return (
    <div className="home-container">
      <Suspense fallback={<CircularBackdrop />}>
        <Recipes />
        <RecipeLookup random={true} />
      </Suspense>
    </div>
  );
};

export default Home;
