import React from "react";
import { useLocation } from "wouter";
import Button from "components/Button";
import useForm from "./useForm";
import "./SearchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r", "nc-17"];

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  const [path, pushLocation] = useLocation();

  const { keyword, rating, times, updateKeyword, updateRating } = useForm({
    initialKeyword,
    initialRating,
  });

  const handleSubmit = (event) => {
    // navegamos
    event.preventDefault();
    // navegamos
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleInput = (event) => {
    updateKeyword(event.target.value);
  };

  const handleRating = (event) => {
    updateRating(event.target.value);
  };

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
      <Button>Buscar</Button>
      <input
        className="form-control searchInput"
        type="text"
        value={keyword}
        onChange={handleInput}
        placeholder="Search a gif here..."
      />
      <select className="form-control" value={rating} onChange={handleRating}>
        <option disabled>Select a rating...</option>
        {RATINGS.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
    </form>
  );
}

// react memo es un componente de orden superior ya que si le pasamos un componente
// nos devolverá otro componente
export default React.memo(SearchForm);
