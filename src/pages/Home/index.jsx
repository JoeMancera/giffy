import React, { useState } from "react";
import ListOfGifs from "components/ListOfGifs";
import Spinner from "components/Spinner";
import TrendingSearches from "components/TrendingSearches";
import { useLocation } from "wouter";
import { useGifs } from "hooks/useGifs";
import "./Home.css";

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();
  const { loading, gifs } = useGifs();

  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  const handleSubmit = (event) => {
    // navegamos
    event.preventDefault();
    pushLocation(`/search/${keyword}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={keyword}
          onChange={handleInput}
          placeholder="Search a gif here..."
        />
      </form>
      <h3>Última busqueda</h3>
      <div className="App-gifs">
        {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
      </div>
      <h3 className="App-title">Tendencias</h3>
      <ul>
        <TrendingSearches />
      </ul>
    </>
  );
}
