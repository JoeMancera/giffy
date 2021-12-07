import React, { useEffect, useState } from "react";
import ListOfGifs from "../../components/ListOfGifs";
import Spinner from "../../components/Spinner";
import getGifs from "../../services/getGifs";
import "./SearchResult.css";

export default function SearchResult({ params }) {
  const { keyword } = params;
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);
  // se agrega el keyword porque es una dependencia del efecto

  return (
    <div className="App-gifs">
      {loading ? <Spinner /> : <ListOfGifs gifs={gifs} />}
    </div>
  );
}
