import React from 'react';
import { Route } from "wouter";
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Home from './pages/Home'
import './App.css';

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>Gifs</h1>
        <Route path='/' component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/gif/:id" component={Detail} />
      </section>
    </div>
  )
}

export default App
