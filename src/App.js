import React from 'react'
import './App.scss'
import Header from './components/Header'
import SearchHistory from './components/SearchHistory'

import MainDisplay from './components/MainDisplay'

function App() {
  return (
    <div className='container'>
      <Header />
      <div className='content'>
        <MainDisplay />
        <SearchHistory />
      </div>
    </div>
  )
}

export default App
