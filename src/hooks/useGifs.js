import {useEffect, useState, useContext} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

export function useGifs({ keyword } = { keyword : null}) {
  const {gifs, setGifs} = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    setLoading(true);

    const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';
    getGifs({ keyword: keywordToUse })
    .then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
    });

  }, [keyword, setGifs]);
  // se agrega el keyword porque es una dependencia del efecto

  return { loading, gifs };
}