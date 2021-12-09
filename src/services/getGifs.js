import {API_KEY, API_URL} from './settings'

const fromApiresponseToGofs = (apiresponse) => {
  const {data = []} = apiresponse
  if (Array.isArray(data)){
    const gifs = data.map(gifElement => {
      const {images, title, id} = gifElement
      const {url} = images.downsized_medium
      return {url, title, id}
    })
    return gifs
  }
  return []
}

export default function getGifs({keyword = 'morty'} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiresponseToGofs)
  .catch(error => {
    console.error(error)
    return[]
  })
}
