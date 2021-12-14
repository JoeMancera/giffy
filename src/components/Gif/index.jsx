import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Gif({ gifInfo }) {
  return (
    <Link href={"/gif/" + gifInfo.id} className="Gif">
      <img loading="lazy" src={gifInfo.url} alt={gifInfo.title} />
      <figcaption>{gifInfo.title}</figcaption>
    </Link>
  );
}

export default React.memo(Gif);

/*

una evaluación, para siertas props que se deban memorizar puede ser por el siguiente callback

export default React.memo(Gif, (prevProps, nextProps) => {
  return prevProps.gifInfo.id === nextProps.gifInfo.id;
});

*/
