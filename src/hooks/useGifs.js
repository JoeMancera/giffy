import {useEffect, useState, useContext} from 'react'
import getGifs from '../services/getGifs';
import GifsContext from '../context/GifsContext';

const INITIAL_PAGE = 0;
export function useGifs({ keyword } = { keyword : null}) {
  const {gifs, setGifs} = useContext(GifsContext);
  const [page, setPage] = useState(INITIAL_PAGE);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);

  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random';
  
  useEffect(() => {
    setLoading(true);

    getGifs({ keyword: keywordToUse })
    .then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.setItem('lastKeyword', keyword);
      console.log('useGifs', gifs);
    });

  }, [keyword, keywordToUse, setGifs]);
  // se agrega el keyword porque es una dependencia del efecto

  useEffect(() => {
    setLoadingNextPage(true);
    if(page === INITIAL_PAGE) return 
    getGifs({ keyword: keywordToUse, page })
    .then((nextGifs) => {
      setGifs(prevGifs => prevGifs.concat(nextGifs));
      setLoadingNextPage(false);
    })
  }, [keywordToUse, page, setGifs])
  return { loading, loadingNextPage, gifs, setPage };
}