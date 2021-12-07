import {useEffect, useState} from 'react'
import getGifs from '../services/getGifs';

export function useGifs({ keyword }) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getGifs({ keyword })
    .then((gifs) => {
      setGifs(gifs);
      setLoading(false);
    });
  }, [keyword]);
  // se agrega el keyword porque es una dependencia del efecto

  return { loading, gifs };
}