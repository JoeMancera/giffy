import React, { useEffect, useState } from "react";
import Gif from "../Gif";
import getGifs from "../../services/getGifs";
import Spinner from "../Spinner";

export default function ListOfGifs({ keyword }) {
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

  if (loading) return <Spinner />;

  return gifs.map((giftElement) => (
    <Gif gifInfo={giftElement} key={giftElement.id} />
  ));
}
