var chai;
var sinon;
var sinonChai;
var expect;

var $;
var Module;
var jsdom;

// for running from terminal
if (typeof exports === 'object') {
  sinon = require("sinon");
  sinonChai = require("sinon-chai");
  chai = require('chai');
  expect = chai.expect;
  chai.use(sinonChai);

  jsdom = require('jsdom').jsdom;
  global.window = jsdom().parentWindow;
  global.jQuery = global.$ = require('jquery')(window);

  Module = require('../module.js');

  $ = require('jquery')();
} else {
  expect = chai.expect;
  Module = window.Module;
  $ = window.jQuery;
}

describe('Module', function() {
  // Module tests here
});
