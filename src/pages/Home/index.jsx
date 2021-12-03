import React from "react";
import { Link } from "wouter";

const POPULAR_GIFS = ["matrix", "starwars", "spiderman", "pokemon"];

export default function Home() {
  return (
    <>
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
