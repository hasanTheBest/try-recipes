import React from "react";
import { useParams } from "react-router-dom";
import SearchItems from "../Components/Common/SearchItems";

const Area = () => {
  const { id } = useParams();
  return <SearchItems term="filter" filter="a" id={id} />;
};

export default Area;
