import React from "react";
import { useParams } from "react-router-dom";
import SearchItems from "../Components/Common/SearchItems";

const Ingredient = () => {
  const { id } = useParams();
  return <SearchItems term="filter" filter="i" id={id} name="Meal" />;
};

export default Ingredient;
