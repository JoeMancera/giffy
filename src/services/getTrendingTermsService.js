import {API_KEY, API_URL} from './settings'

const fromApiResponseToTrendingTerms = (response) => {
  const {data = []}= response
  return data
}

export default function getTrendingTerms({keyword = 'morty'} = {}) {
const apiURL = `${API_URL}/trending/searches?api_key=${API_KEY}&q=${keyword}&limit=15&offset=0&rating=g&lang=en`

  return fetch(apiURL)
  .then(res => res.json())
  .then(fromApiResponseToTrendingTerms)
}