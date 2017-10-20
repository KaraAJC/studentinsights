import React, { Component } from 'react';

function promiseState() {
  return {
    isPending: false,
    resolve: undefined,
    reject: undefined
  };
}

// Executes a promise, passes state changes to children.
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

export default Loader;