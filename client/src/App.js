import React, { Component } from 'react';
import Loader from './Loader.js';
import PageContainer from './student/PageContainer.js';
import qs from 'query-string';

class App extends Component {
  fetch() {
    return fetch('/students/1/show_json/')
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

  renderData(serializedData) {
    return (
      <PageContainer
        nowMomentFn={() => 'foo'}
        serializedData={serializedData}
        queryParams={qs.parse(window.location.search)}
        history={window.history} />
    );
  }
}

export default App;
