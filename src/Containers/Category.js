import React from "react";
import { useParams } from "react-router-dom";
import SearchItems from "../Components/Common/SearchItems";

const Category = () => {
  const { id } = useParams();
  return <SearchItems term="filter" filter="c" id={id} name="Meal" />;
};

export default Category;
