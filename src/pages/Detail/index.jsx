import React from "react";
import { Redirect } from "wouter";
//import useGlobalGifs from "../../hooks/useGlobalGifs";
import Gif from "../../components/Gif";
import useSingleGif from "hooks/useSingleGif";
import Spinner from "components/Spinner";
//import useSEO from "hooks/useSEO";
import { Helmet } from "react-helmet";

export default function GifInfo({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  /* ejemplo de como usar hooks  y gusrdar elementos y recuperarlos
  const gifs = useGlobalGifs();
  */

  const title = gif ? gif.title : "";
  //useSEO({ description: `Gif from giphy called ${title}`, title });

  if (isLoading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    );
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;

  return (
    <>
      <Helmet>
        <title>{title} || Gyffy</title>
      </Helmet>
      <Gif gifInfo={gif} />
    </>
  );
}
