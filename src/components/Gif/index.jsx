import React from "react";
import "./Gif.css";

export default function Gif({ gifInfo }) {
  return (
    <a href={"/gif/" + gifInfo.id} className="Gif">
      <h4>{gifInfo.title}</h4>
      <img src={gifInfo.url} alt={gifInfo.title} />
    </a>
  );
}
