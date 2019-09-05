import React from 'react'
import { connect } from 'react-redux'

class Today extends React.Component {
  render() {
    const { currently, daily, noData, displayedPlace } = this.props.weather

    let renderedComponent
    noData
      ? (renderedComponent = <div></div>)
      : (renderedComponent = (
          <div>
            <p>{`${Math.round(currently.temperature)}°F`}</p>
            <p>{displayedPlace}</p>
            <p>{currently.icon}</p>
            <p>{currently.summary}</p>
            <p>High: {`${Math.round(daily.data[0].temperatureMax)}°F`}</p>
            <p>Low: {`${Math.round(daily.data[0].temperatureLow)}°F`}</p>
          </div>
        ))

    return renderedComponent
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(Today)
