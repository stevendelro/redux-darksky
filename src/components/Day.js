import React from 'react'

const Day = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp*1000)

  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ]

  return (
    <div className='day'>
      <p>Day: {weekdays[date.getDay()]} </p>
      <p className='day--icon'>Icon: {props.icon}</p>
      <p className='day--temp-hi'>{`High: ${Math.round(props.tempHi)}°F`}</p>
      <p className='day--temp-lo'>{`Low: ${Math.round(props.tempLo)}°F`}</p>
      <hr />
    </div>
  )
}

export default Day