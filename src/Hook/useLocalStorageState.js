import { useEffect, useState } from "react";

const useLocalStorageState = (key, initialValue) => {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(localStorage.getItem(key)) || initialValue;
    } catch (e) {
      value = initialValue;
    }

    return value;
  });

  useEffect(() => {
    setState(state);
    localStorage.setItem(key, JSON.stringify(state));
  }, [state]);

  return [state, setState];
};

export default useLocalStorageState;
