import React, { useState } from "react";
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState("");

  const handleSubmit = (event) => {
    // navegamos
    event.preventDefault();
    onSubmit({ keyword });
  };

  const handleInput = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        type="text"
        value={keyword}
        onChange={handleInput}
        placeholder="Search a gif here..."
      />
    </form>
  );
}

// react memo es un componente de orden superior ya que si le pasamos un componente
// nos devolverá otro componente
export default React.memo(SearchForm);
