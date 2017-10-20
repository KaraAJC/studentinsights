import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../util/Loader.js';
import PageContainer from './PageContainer.js';
import moment from 'moment';
import __mapKeys from 'lodash/mapKeys';
import __camelCase from 'lodash/camelCase';


// Entry point for JS page, conatiner that shims loading serialized data
// for the page.
class Main extends Component {
  constructor(props) {
    super(props);
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    const {studentId} = this.props;
    return fetch(`/students/${studentId}/show_json`)
      .then(r => r.json());
  }

  render() {
    return (
      <div className="App">
        <Loader promiseFn={this.fetch} isRenderFn={true}>
          {(dataP) =>
            <div>
              {(dataP.isPending || dataP.reject) && <pre>{JSON.stringify(dataP, null, 2)}</pre>}
              {(!dataP.isPending && dataP.resolve) && this.renderData(dataP.resolve)}
            </div>
          }
        </Loader>
      </div>
    );
  }

  renderData(underscoredSerializedData) {
    const serializedData = __mapKeys(underscoredSerializedData, (value, key) => __camelCase(key));
    const {queryParams} = this.props;
    return (
      <PageContainer
        nowMomentFn={() => moment.utc()}
        serializedData={serializedData}
        queryParams={queryParams}
        history={window.history} />
    );
  }
}
Main.propTypes = {
  studentId: PropTypes.number.isRequired,
  queryParams: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default Main;
