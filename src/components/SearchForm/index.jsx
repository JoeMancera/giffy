import React, { useReducer } from "react";
import { useLocation } from "wouter";
import "./SearchForm.css";

const RATINGS = ["g", "pg", "pg-13", "r", "nc-17"];

const ACTIONS = {
  UPDATE_KEYWORD: "update_keyword",
  UPDATE_RATING: "update_rating",
};

// dos formas de hacer un reducer

/*******funcional

const ACTIONS_REDUCER = {
  [ACTIONS.UPDATE_KEYWORD]: (state, action) => ({
    ...state,
    keyword: action.payload,
    times: state.times + 1,
  }),
  [ACTIONS.UPDATE_RATING]: (state, action) => ({
    ...state,
    rating: action.payload,
  })
}

const reducer = (state, action) => {
  const actionReducer = ACTIONS_REDUCER[action.type];
  return actionReducer ? actionReducer(state, action) : state;
}

*/

//*** con el switch de toda la vida
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.UPDATE_KEYWORD:
      return {
        ...state,
        keyword: action.payload,
        times: state.times + 1,
      };
    case ACTIONS.UPDATE_RATING:
      return {
        ...state,
        rating: action.payload,
      };
    default:
      return state;
  }
};

function SearchForm({ initialKeyword = "", initialRating = "g" }) {
  // const [rating, setRating] = useState(initialRating);
  const [path, pushLocation] = useLocation();

  const [state, dispach] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;

  const handleSubmit = (event) => {
    // navegamos
    event.preventDefault();
    // navegamos
    pushLocation(`/search/${keyword}/${rating}`);
  };

  const handleInput = (event) => {
    dispach({ type: ACTIONS.UPDATE_KEYWORD, payload: event.target.value });
  };

  const handleRating = (event) => {
    dispach({ type: ACTIONS.UPDATE_RATING, payload: event.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <button>Buscar</button>
      <input
        className="form-control"
        type="text"
        value={keyword}
        onChange={handleInput}
        placeholder="Search a gif here..."
      />
      <select value={rating} onChange={handleRating}>
        <option disabled>Select a rating...</option>
        {RATINGS.map((rating) => (
          <option key={rating} value={rating}>
            {rating}
          </option>
        ))}
      </select>
      {times}
    </form>
  );
}

// react memo es un componente de orden superior ya que si le pasamos un componente
// nos devolverá otro componente
export default React.memo(SearchForm);
