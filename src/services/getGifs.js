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

export default function getGifs({limit = 10, keyword = 'random', page = 0, rating = 'g'} = {}) {
  const apiURL = `${API_URL}/gifs/search?api_key=${API_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`

  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiresponseToGofs)
  .catch(error => {
    console.error(error)
    return[]
  })
}
