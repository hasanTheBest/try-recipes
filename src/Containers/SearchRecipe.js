import React from "react";
import { useParams } from "react-router-dom";
import SearchItems from "../Components/Common/SearchItems";

const FirstLetter = () => {
  const { id } = useParams();
  return <SearchItems term="search" filter="s" id={id} />;
};

export default FirstLetter;
