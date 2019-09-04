import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchWeather, locationTextInput, logSearchHistory } from '../actions/index'

class Search extends React.Component {
  inputLocation = event => {
    this.props.locationTextInput(event.target.value)
  }
  onFormSubmit = event => {
    event.preventDefault()
    this.props.fetchWeather(this.props.weather.location)
    this.props.logSearchHistory(this.props.weather.location)
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            value={this.props.weather.location}
            onChange={this.inputLocation}
            placeholder='Location'
          />
          <button type='submit'>GO</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchWeather, locationTextInput, logSearchHistory }, dispatch)
}

const mapStateToProps = ({ weather }) => {
  return { weather }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)
