// Provide dependencies still in Sprockets
// This doesn't work directly in setupTests, not sure why.
import $ from 'jquery';
window.$ = window.jQuery = $;


import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;


import ReactModal from 'react-modal';
window.ReactModal = ReactModal;


import moment from 'moment';
window.moment = moment;


window.Cookies = {
  getJSON() { return {}; }
};

window.ReactTestUtils = {
  Simulate: {
    change() {}
  }
};

import Highcharts from 'highcharts';
window.Highcharts = Highcharts;