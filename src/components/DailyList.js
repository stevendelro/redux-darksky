import React from 'react'
import { connect } from 'react-redux'
import Day from './Day'
import uuid from 'uuid'

class DailyList extends React.Component {
  render() {
    const { daily, noData } = this.props.weather
    let renderedComponent
    if (noData) {
      renderedComponent = <div></div>
    } else {
      renderedComponent = daily.data.map(
        ({ time, icon, temperatureHigh, temperatureLow }) => (
          <Day
            key={uuid()}
            time={time}
            icon={icon}
            tempHi={temperatureHigh}
            tempLo={temperatureLow}
          />
        )
      )
    }
    return <div className='daily-list'>{renderedComponent}</div>
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(DailyList)
