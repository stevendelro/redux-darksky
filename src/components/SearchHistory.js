import React from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid'

class SearchHistory extends React.Component {
  render() {
    const historyList = this.props.historyList
      .map(item => (
        <div key={uuid()}>
          <h3>{item.location.toUpperCase()}</h3>
          <p>{item.date}</p>
          <p>{item.timeSearched}</p>
        </div>
      ))
      .reverse()
    return (
      <div>
        <div>SEARCH HISTORY</div>
        <div>
          {this.props.empty ? (
            <p>Search history will appear here.</p>
          ) : (
            historyList
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { empty: state.history.empty, historyList: state.history.historyList }
}
export default connect(mapStateToProps)(SearchHistory)
