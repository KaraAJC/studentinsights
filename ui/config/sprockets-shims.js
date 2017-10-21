// Provide dependencies still in Sprockets
// This doesn't work directly in setupTests, not sure why.
import $ from 'jquery';
window.$ = window.jQuery = $;

import React from 'react';
window.React = React;

// // This is modified from https://raw.githubusercontent.com/gbirke/Sanitize.js/master/lib/sanitize.js
// // changed to export the function as a module
// import Sanitize from './Sanitize.js';
// window.Sanitize = Sanitize;