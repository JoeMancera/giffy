import React, { useEffect, useState, useRef } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);
  return <Category listOfItems={trends} />;
}

export default function LazyTrending() {
  const [show, setShow] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const onChange = (entries) => {
      const el = entries[0];
      //console.log(el);
      if (el.isIntersecting) {
        setShow(true);
      }
    };

    const observer = new IntersectionObserver(onChange, {
      rootMargin: "100px",
    });
    observer.observe(elementRef.current);
  });

  return <div ref={elementRef}>{show ? <TrendingSearches /> : null}</div>;
}
