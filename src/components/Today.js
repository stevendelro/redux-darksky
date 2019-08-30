import React from 'react'
import { connect } from 'react-redux'

class Today extends React.Component {
  render() {
    const { currently, daily, noData } = this.props.weather

    let renderedComponent
    noData
      ? (renderedComponent = <div></div>)
      : (renderedComponent = (
          <div>
            <h1>Right Now</h1>
            <p>{currently.icon}</p>
            {<p>{currently.summary}</p>}
            <h3>Feels like: </h3>
            <p>{currently.temperature}</p>
            <p>High: {daily.data[0].temperatureMax}</p>
            <p>Low: {daily.data[0].temperatureLow}</p>
          </div>
        ))

    return renderedComponent
  }
}

function mapStateToProps({ weather }) {
  return { weather }
}
export default connect(mapStateToProps)(Today)
