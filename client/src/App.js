

  // # danger
  // # danger
  // # danger
  // # danger
  // # danger
  
import React, { Component } from 'react';

function promiseState() {
  return {
    isPending: false,
    resolve: undefined,
    reject: undefined
  };
}


class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataP: promiseState()
    };
    this.onResolved = this.onResolved.bind(this);
    this.onRejected = this.onRejected.bind(this);
  }

  componentDidMount() {
    const {promiseFn} = this.props;
    promiseFn()
      .then(this.onResolved)
      .then(this.onRejected);
  }

  onResolved(resolve) {
    const {dataP} = this.state;
    this.setState({ dataP: {...dataP, resolve} });
  }

  onRejected(reject) {
    const {dataP} = this.state;
    this.setState({ dataP: {...dataP, reject} });
  }

  render() {
    const {dataP} = this.state;
    const {children, isRenderFn} = this.props;

    if (isRenderFn) {
      return children(dataP);
    } else {
      return React.cloneElement(children, {
        ...children.props,
        dataP
      });
    }
  }
}


class App extends Component {
  fetch() {
    return fetch('/students/1/show_json/')
      .then(r => r.json());
  }

  render() {
    return (
      <div className="App">
        <div>HELLO!</div>
        <Loader promiseFn={this.fetch} isRenderFn={true}>
          {(dataP) => <pre>{JSON.stringify(dataP, null, 2)}</pre>}
        </Loader>
      </div>
    );
  }
}

export default App;
