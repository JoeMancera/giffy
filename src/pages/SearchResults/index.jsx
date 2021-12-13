import React, { useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./SearchResult.css";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const { loading, gifs, setPage } = useGifs({ keyword });
  const { isNearScreen, fromRef } = useNearScreen({ once: false });
  // const handleOnNextPage = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  //const handleOnNextPage = () => console.log("next page");
  // El useCallback espera una función por lo que no hace falta hacer una arrow function, ya que el debounce devuelve una
  const debounceHandleNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 500),
    [setPage]
  );

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage();
  }, [isNearScreen, debounceHandleNextPage]);

  return (
    <>
      <h2 className="App-gifs-title">{decodeURI(keyword)}</h2>
      <div className="App-gifs">
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        <div id="visor" ref={fromRef}></div>
      </div>
    </>
  );
}
