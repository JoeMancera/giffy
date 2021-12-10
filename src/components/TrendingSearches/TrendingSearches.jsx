import React, { useState, useEffect } from "react";
import getTrendingTerms from "services/getTrendingTermsService";
import Category from "../Category";

export default function TrendingSearches() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    getTrendingTerms().then(setTrends);
  }, []);
  return <Category listOfItems={trends} />;
}
