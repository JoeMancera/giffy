import React from "react";
import Gif from "../Gif";
import "./ListOfGif.css";

export default function ListOfGifs({ gifs }) {
  return (
    <div className="ListOfGifs">
      {gifs.map((giftElement) => (
        <Gif gifInfo={giftElement} key={giftElement.id} />
      ))}
    </div>
  );
}
