/** @jsx React.DOM */
var React = require('react');
var ReactDOM = require('react-dom');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var browserHistory = require('react-router').browserHistory;

//var createBrowserHistory = require('react-router').browserHistory.createBrowserHistory

var App = require('./components/General/App.react');
var EditEvaluationPage = require('./components/EditEvaluation/EditEvaluationPage.react');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
    <Route path="/edit-evaluation/:evaluationId" component={EditEvaluationPage}/>
  </Router>,
  document.getElementById('main')
);
