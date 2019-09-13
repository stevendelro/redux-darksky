import React from 'react'
import Search from './Search'

class Header extends React.Component {
  render() {
    return (
      <header className='header'>
        <h1>Weather</h1>
        <Search />
      </header>
    )
  }
}

export { Header as default }
