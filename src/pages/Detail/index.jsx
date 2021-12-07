import React from "react";
import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from "../../components/Gif";

export default function GifInfo({ params }) {
  const { id } = params;
  const gifs = useGlobalGifs();
  const gif = gifs.find((gif) => gif.id === id);
  return <Gif gifInfo={gif} />;
}
