import React from 'react';
import PropTypes from 'prop-types';

export default class SearchBox extends React.Component {
  constructor() {
    super();
    this.state = {
      timerSet: false,
      searchCount: 0,
      errorMessage: '',
      searchThresholdInSeconds: 60,
    }
  }

  setTimer() {
    this.timer = setTimeout(() => {
      clearTimeout(this.timer);
      this.setState({
        searchCount: 0,
        errorMessage: '',
        timerSet: false,
      });
    }, 1000 * this.state.searchThresholdInSeconds);
  }

  searchPlanets = (e) => {
    let { store } = this.context, storeData = store.getState();
    if (this.state.timerSet === false) {
      this.state.timerSet = true;
      this.setTimer();
    }

    if (storeData.loginReducer.userDetails.name !== "Luke Skywalker") {
      if ( this.timer && this.state.searchCount <= 15 ) {
        this.props.search(e.target.value);
        this.setState({ searchCount: this.state.searchCount+1 });
      }

      if (this.state.searchCount === 16) {
        this.props.search('');
        this.state.errorMessage = 'You are not allowed to perform more than 15 searches per minute';
        this.setState({ searchCount: this.state.searchCount+1 });
      }
    } else {
      this.props.search(e.target.value);
    }
  }

  render() {
    return (
      <div class="col-md-12 col-sm-12 no-padding">
        <input
          class="col-md-12 col-sm-12 search-box"
          placeholder="Search for the planets"
          onKeyUp={this.searchPlanets}
        />
        <span class="error">
          { this.state.errorMessage }
        </span>
      </div>
    )
  }
}

SearchBox.contextTypes = {
  store: PropTypes.object
};
