import React from 'react'
import './App.css'
import Header from './components/Header'
// import SearchHistory from './components/SearchHistory'
// import HourlyList from './components/HourlyList'
// import DailyList from './components/DailyList'
import Today from './components/Today'
import Search from './components/Search'

function App() {
  return (
    <div className='App'>
      <Header />
      <Search />
      <Today />
      {/* <SearchHistory /> */}
      {/* <HourlyList /> */}
      {/* <DailyList /> */}
    </div>
  )
}

export default App
