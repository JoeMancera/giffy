import React, { useState } from "react";
import { Link, useLocation } from "wouter";

import "./Home.css";

const POPULAR_GIFS = ["matrix", "starwars", "spiderman", "pokemon"];

export default function Home() {
  const [keyword, setKeyword] = useState("");
  const [path, pushLocation] = useLocation();

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
