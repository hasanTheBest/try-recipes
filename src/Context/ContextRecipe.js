import React, { createContext } from "react";
import data from "../data/recipes.json";

export const ContextRecipe = createContext();

const RecipeProvider = ({ children }) => {
  const recipes = data.meals;

  return (
    <ContextRecipe.Provider value={{ recipes }}>
      {children}
    </ContextRecipe.Provider>
  );
};

export default RecipeProvider;
