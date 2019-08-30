import React from 'react'
import './App.css'
// import Header from './components/Header'
import Search from './components/Search'
// import SearchHistory from './components/SearchHistory'
// import HourlyList from './components/HourlyList'
import DailyList from './components/DailyList'
// import Today from './components/Today'

function App() {
  return (
    <div className='App'>
      {/* <Header /> */}
      <Search />
      {/* <Today /> */}
      {/* <SearchHistory /> */}
      {/* <HourlyList /> */}
      <DailyList />
    </div>
  )
}

export default App
