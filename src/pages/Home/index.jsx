import React, { useCallback } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import SearchForm from "components/SearchForm";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import "./Home.css";

export default function Home() {
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  // Para evitar problemas de renderizado cuando tenemos un handle podemos
  // usar useCallback para que no se vuelva a renderizar sin que las props de las que dependa cambien
  const handleSubmit = useCallback(
    ({ keyword }) => {
      // navegamos
      pushLocation(`/search/${keyword}`);
    },
    [pushLocation]
  );

  return (
    <>
      <SearchForm onSubmit={handleSubmit} />
      <h3>Última busqueda</h3>
      <div className="App-content ">
        <section className="App-gifs">
          {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
        </section>
        <aside className="App-trends">
          <h3 className="App-section">Tendencias</h3>
          <TrendingSearches />
        </aside>
      </div>
    </>
  );
}
