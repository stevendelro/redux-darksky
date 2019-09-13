import React from 'react'
import Today from './Today'
import HourlyList from './HourlyList'
import DailyList from './DailyList'

const MainDisplay = () => {
  return (
    <div className="main-display">
      Main Display
      <Today />
      <HourlyList />
      <DailyList />
    </div>
  )
}

export default MainDisplay