import React from 'react';
import { Route, Link } from "wouter";
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Home from './pages/Home'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import './App.css';

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'JoeMancera',
      working: false,
    }}>
      <div className="App">
        <section className="App-content">
          <h1><Link to='/'>Gifs</Link></h1>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </div>
    </StaticContext.Provider>
  )
}

export default App
