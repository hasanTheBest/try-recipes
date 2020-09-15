import React from "react";
import Navigation from "../Components/Home/Navigation/Navigation";
import Recipes from "../Components/Home/Recipes/Recipes";
import RecipeLookup from "../Components/Common/RecipeLookup";

const Home = () => {
  return (
    <div className="home-container">
      <Navigation />
      <Recipes />
      <RecipeLookup random={true} />
    </div>
  );
};

export default Home;
