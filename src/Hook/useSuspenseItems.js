import Axios from "axios";
import produce from "immer";
import LRU from "lru-cache";
import md5 from "md5";

const cache = new LRU(500);

const useSuspenseItems = (term, filter, id) => {
  const key = md5(JSON.stringify(`${term}?${filter}=${id}`));
  const value = cache.get(key) || { status: "new", data: null };

  if (value.status === "resolved") {
    return value.data;
  }

  const promise = Axios({
    method: "GET",
    url: `https://www.themealdb.com/api/json/v1/1/${term}.php`,
    params: "random" !== term &&
      "categories" !== term && {
        [filter]: id,
      },
  });

  promise.then((data) => {
    cache.set(
      key,
      produce(value, (draft) => {
        draft.status = "resolved";
        draft.data = data.data["categories" !== term ? "meals" : "categories"];
      })
    );
  });

  throw promise;
};

export default useSuspenseItems;
