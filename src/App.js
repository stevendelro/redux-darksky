import React from 'react'
import './App.scss'
import Header from './components/Header'
import HourlyList from './components/HourlyList'
import DailyList from './components/DailyList'
import Today from './components/Today'
import { Container } from 'semantic-ui-react'

function App() {
  return (
    <div className='container'>
      <Header />
      <Container>
        <Today />
        <HourlyList />
        <DailyList />
      </Container>
    </div>
  )
}

export default App
