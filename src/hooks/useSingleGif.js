import { useState, useEffect } from 'react'
import { useGifs } from '../hooks/useGifs'
import getSingleGif from 'services/getSingleGif'

export default function useSingleGif({ id }) {
  const {gifs} = useGifs()
  const gifFromCache = gifs.find(gif => gif.id === id)
  
  const [gif, setGif] = useState(gifFromCache)
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState(false)

  useEffect(() => {
    if(!gif){
      setLoading(true)

      getSingleGif({ id })
      .then(gif => { 
        setGif(gif)
        setLoading(false)
        setError(false)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
        console.log('Aquí petó', err)
      })
    }
    setLoading(false)

  }, [gif, id])
  
  return {gif, isLoading, isError}
}