import React, { useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import { Link, useLocation } from "wouter";
import { useGifs } from "../../hooks/useGifs";

import "./Home.css";

const POPULAR_GIFS = ["matrix", "starwars", "spiderman", "pokemon"];

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
      <h3 className="App-title">Los gifs más top</h3>
      <ul>
        {POPULAR_GIFS.map((gif) => (
          <li key={gif}>
            <Link to={`/search/${gif}`}>{gif}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
