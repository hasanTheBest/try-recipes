const useIngredientsMeasure = (meal) => {
  let rows = [];

  let data;
  for (let i = 1; i <= 20; i++) {
    data = {
      ingredient: meal[`strIngredient${i}`],
      measure: meal[`strMeasure${i}`],
    };
    rows.push(data);
  }
  return rows;
};

export default useIngredientsMeasure;
