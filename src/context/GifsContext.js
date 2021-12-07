import React, {useState} from 'react'

const Context = React.createContext({})

// Es el provider propio donde guardamos lo ainfo que no sinteresa
export function GifsContextProvider({ children }) {
  // Se crea el use stae para porder actualizar el valor y tener el valor que deseamos guardar en el contexto
  const [gifs, setGifs] = useState([])
  console.log('Context' , gifs)
  return <Context.Provider value={{ gifs, setGifs }}>
    {children}
  </Context.Provider>
}

export default Context