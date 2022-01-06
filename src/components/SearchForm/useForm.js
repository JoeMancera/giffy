import { useReducer } from 'react'

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
  console.log("state", state);
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

export default function useForm ({ initialKeyword, initialRating }) {
  const [state, dispach] = useReducer(reducer, {
    keyword: decodeURIComponent(initialKeyword),
    rating: initialRating,
    times: 0,
  });

  const { keyword, rating, times } = state;
  return {
    keyword,
    rating,
    times,
    updateKeyword: (keyword) =>
      dispach({ type: ACTIONS.UPDATE_KEYWORD, payload: keyword }),
    updateRating: (rating) =>
      dispach({ type: ACTIONS.UPDATE_RATING, payload: rating }),
  };
};