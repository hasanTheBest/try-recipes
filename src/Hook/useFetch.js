import Axios from "axios";
import { useState } from "react";

const useFetch = (term, filter, id) => {
  const promise = Axios({
    method: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/${term}.php`,
    params: {
      [filter]: id,
    },
  });
  return promise;
};

export default useFetch;
