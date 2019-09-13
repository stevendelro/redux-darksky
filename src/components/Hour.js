import React from 'react'

const Hour = props => {
  const timestamp = props.time
  const date = new Date()
  date.setTime(timestamp*1000)
  let hours = date.getHours()
  const amOrPm = hours >= 12 ? 'PM' : 'AM'
  hours = (hours % 12) || 12

  return (
    <div className='hour'>
      <h3 className='hour--time'>{`${hours} ${amOrPm}`}</h3>
      <p className='hour--icon'>{props.icon}</p>
      <p className='hour--temp'>{`${Math.round(props.temp)}°F`}</p>
      <hr />
    </div>
  )
}

export default Hour