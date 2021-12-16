import React from "react";
import { Redirect } from "wouter";
//import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from "../../components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";

export default function GifInfo({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  /* ejemplo de como usar hooks  y gusrdar elementos y recuperarlos
  const gifs = useGlobalGifs();
  */
  console.log(isError);
  if (isLoading) return <Spinner />;
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return <Gif gifInfo={gif} />;
}
