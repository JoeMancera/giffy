import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs';

export function useGifs({ keyword } = { keyword : null}) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword');
;
    getGifs({ keyword: keywordToUse })
    .then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      if (keyword) localStorage.setItem('lastKeyword', keyword);
    });
  }, [keyword]);
  // se agrega el keyword porque es una dependencia del efecto

  return { loading, gifs };
}