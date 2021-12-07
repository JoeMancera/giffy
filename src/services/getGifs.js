const apiKey = 'DS9YKV8Tn7ba42IoXk20tS381cnGUKXR'

export default function getGifs({keyword = 'morty'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

  console.log('useEffect')
  return fetch(apiURL)
  .then(res => res.json())
  .then(response => {
    const {data = []} = response
    const gifs = data.map(gifElement => {
      const {images, title, id} = gifElement
      const {url} = images.downsized_medium
      return {url, title, id}
    })
    return gifs
  })
}