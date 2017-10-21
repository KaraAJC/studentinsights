// Provide dependencies still in Sprockets
// This doesn't work directly in setupTests, not sure why.
import $ from 'jquery';
window.$ = window.jQuery = $;

import React from 'react';
window.React = React;

import moment from 'moment';
window.moment = moment;