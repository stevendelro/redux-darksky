const INITIAL_STATE = {
  location: '',
  noData: true,
  currently: {},
  daily: {},
  hourly: {}
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOCATION_TEXT_INPUT':
      return {
        ...state,
        location: action.location
      }
    case 'FETCH_WEATHER':
      return {
        ...state,
        location: '',
        noData: false,
        currently: {
          ...action.weatherData.currently
        },
        daily: {
          ...action.weatherData.daily
        },
        hourly: {
          ...action.weatherData.hourly
        }
      }
    default: {
      return state
    }
  }
}
