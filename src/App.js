import React from 'react';
import { Route, Link } from "wouter";
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Home from './pages/Home'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import './App.css';
import Logo from "assets/logo.svg";

function App() {

  return (
    <StaticContext.Provider value={{
      name: 'JoeMancera',
      working: false,
    }}>
      <>
        <section className="App">
          <h1>
            <Link to='/'>
              &nbsp;<img width="100px" className='logo' src={Logo} alt="Gifs App" />
            </Link>
          </h1>
          <GifsContextProvider>
            <Route path='/' component={Home} />
            <Route path="/search/:keyword" component={SearchResults} />
            <Route path="/gif/:id" component={Detail} />
          </GifsContextProvider>
        </section>
      </>
    </StaticContext.Provider>
  )
}

export default App
