import React from 'react'

const Day = props => {
  return (
    <div className='day'>
      <p>Day: {props.time}</p>
      <p className='day--icon'>Icon: {props.icon}</p>
      <p className='day--temp-hi'>High: {props.tempHi}</p>
      <p className='day--temp-lo'>Low: {props.tempLo}</p>
    </div>
  )
}

export default Day