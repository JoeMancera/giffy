import React from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import "./SearchResult.css";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });

  const handleOnNextPage = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <h2 className="App-gifs-title">{decodeURI(keyword)}</h2>
      <div className="App-gifs">
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
      <button onClick={handleOnNextPage}>Next Page</button>
    </>
  );
}
