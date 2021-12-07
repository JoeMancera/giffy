import React from "react";
import "./Gif.css";

export default function Gif({ gifInfo }) {
  return (
    <a href={"/gif/" + gifInfo.id} className="Gif">
      <img src={gifInfo.url} alt={gifInfo.title} />
      <figcaption>{gifInfo.title}</figcaption>
    </a>
  );
}
