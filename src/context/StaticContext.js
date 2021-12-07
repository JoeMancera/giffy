import React from 'react'

// El objeto sirve para almacenar los datos que se van a 
// utilizar en el contexto pero sin usar el provider
const Context = React.createContext({
  name: 'JoeMancera',
  working: false,
})

export default Context
