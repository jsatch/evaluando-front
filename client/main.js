/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var ListEvaluationsPage = require('./components/ListEvaluations/ListEvaluationsPage.react');
ReactDOM.render(
  <ListEvaluationsPage />,
  document.getElementById('main')
);
