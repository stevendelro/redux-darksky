import React from 'react'
import Search from './Search'

const Header = () => {
  return (
    <div className='header'>
      <div className='search-box'>
        <h1 className='heading-primary'>
        feather
        </h1>
        <Search />
      </div>
    </div>
  )
}

export { Header as default }
