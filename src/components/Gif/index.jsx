import React from "react";
import { Link } from "wouter";
import "./Gif.css";

export default function Gif({ gifInfo }) {
  return (
    <Link href={"/gif/" + gifInfo.id} className="Gif">
      <img loading="lazy" src={gifInfo.url} alt={gifInfo.title} />
      <figcaption>{gifInfo.title}</figcaption>
    </Link>
  );
}
