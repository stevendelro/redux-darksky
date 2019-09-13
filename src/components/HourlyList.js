import React from 'react'
import { connect } from 'react-redux'
import Hour from './Hour'
import uuid from 'uuid'

class HourlyList extends React.Component {
  render() {
    const { hourly, noData } = this.props.weather
    let renderedComponent
    if (noData) {
      renderedComponent = <div></div>
    } else {
      renderedComponent = hourly.data.map(({ time, icon, temperature }) => (
        <Hour key={uuid()} time={time} icon={icon} temp={temperature} />
      ))
    }
    return <div className='hourly-list'>{renderedComponent}</div>
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(HourlyList)
