import React, { useEffect, useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import SearchForm from "components/SearchForm";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import "./SearchResult.css";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function SearchResult({ params }) {
  const { keyword, rating = "g" } = params;
  const { loading, gifs, setPage } = useGifs({ keyword, rating });
  const { isNearScreen, fromRef } = useNearScreen({ once: false });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";
  //useSEO({ title });
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
      <Helmet>
        <title>{title} || Giffy</title>
        <meta name="description" content={title} />
      </Helmet>
      <SearchForm initialKeyword={keyword} initialRating={rating} />
      <h2 className="App-gifs-title">{decodeURI(keyword)}</h2>
      <div className="App-gifs">
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        <div id="visor" ref={fromRef}></div>
      </div>
    </>
  );
}
