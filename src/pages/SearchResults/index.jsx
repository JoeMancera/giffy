import React from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { useGifs } from "../../hooks/useGifs";
import "./SearchResult.css";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs } = useGifs({ keyword });

  return (
    <div className="App-gifs">
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </div>
  );
}
