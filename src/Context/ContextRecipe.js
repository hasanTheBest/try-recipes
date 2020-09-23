import React, { createContext } from "react";
import useFetch from "../Hook/useFetch";
import useLocalStorageState from "../Hook/useLocalStorageState";

export const ContextRecipe = createContext();

const RecipeProvider = ({ children }) => {
  const cats = useFetch("list", "c", "list").then((data) => data.data);

  const [categoryList] = useLocalStorageState(
    "try-recipe:category_list",
    cats.meals
  );

  return (
    <ContextRecipe.Provider value={{ categoryList }}>
      {children}
    </ContextRecipe.Provider>
  );
};

export default RecipeProvider;
