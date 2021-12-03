import React from "react";
import ListOfGifs from "../../components/ListOfGifs";

export default function SearchResult({ params }) {
  const keyword = params.keyword;
  return <ListOfGifs keyword={keyword} />;
}
