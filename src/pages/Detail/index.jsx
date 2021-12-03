import React from "react";

export default function GifInfo({ params }) {
  const { id } = params;
  return (
    <div className="gif-info">
      <h2>{id}</h2>
    </div>
  );
}
