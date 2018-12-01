import React from 'react';
import ReactDom from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import store from './assets/store/app-store';
import LoginComponent from './assets/components/login-component';
import PlanetsComponent from './assets/components/planets-component';

class AppContainer extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    let { store } = this.context;
    store.subscribe(() => {
      this.forceUpdate();
    })
  }

  render() {
    return (
        <Router>
          <div>
            <Route exact path="/" component={LoginComponent} />
            <Route path="/planets" component={PlanetsComponent} />
          </div>
        </Router>
    )
  }
}

AppContainer.contextTypes = {
  store: PropTypes.object
};

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('app-container')
);
