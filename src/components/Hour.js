import React from 'react'

const Hour = props => {
  return (
    <div className='hour'>
      <h3 className='hour--time'>{props.time}</h3>
      <p className='hour--icon'>{props.icon}</p>
      <p className='hour--temp'>{props.temp}</p>
    </div>
  )
}

export default Hour