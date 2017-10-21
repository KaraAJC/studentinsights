// Provide dependencies still in Sprockets
// This doesn't work directly in setupTests, not sure why.
import $ from 'jquery';
window.$ = window.jQuery = $;
window.$.fn.datepicker = function() {};
window.$.fn.autocomplete = function() {};


import React from 'react';
import ReactDOM from 'react-dom';
window.React = React;
window.ReactDOM = ReactDOM;
import ReactModal from 'react-modal';
window.ReactModal = ReactModal;
window.ReactTestUtils = {
  Simulate: {
    change() {},
    input() {},
    blur() {}
  }
};


import moment from 'moment';
window.moment = moment;


window.Cookies = {
  getJSON() { return {}; }
};


import Highcharts from 'highcharts';
window.Highcharts = Highcharts;


import d3 from 'd3';
window.d3 = d3;