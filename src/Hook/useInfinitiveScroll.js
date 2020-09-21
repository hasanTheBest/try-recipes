import { useEffect, useRef, useState, useCallback } from "react";

const useInfinitiveScroll = (data, query = "recipe") => {
  const itemCount = 12;
  const [loading, setLoading] = useState(true);
  const [part, setPart] = useState(1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([]);
  }, [query]);

  useEffect(() => {
    setLoading(true);
    if (data) {
      let newItems = data.slice(itemCount * (part - 1), itemCount * part);
      setItems((prev) => [...prev, ...newItems]);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [part, data]);

  const observer = useRef();
  const lastElRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && data.length > itemCount * part) {
          setPart((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return { items, lastElRef, loading };
};

export default useInfinitiveScroll;
