var React = require('react');
var ListEvaluationsPage = require('../ListEvaluations/ListEvaluationsPage.react');

var PropTypes = React.PropTypes;

var App = React.createClass({

  render: function() {
    return (
      <ListEvaluationsPage />
    );
  }

});

module.exports = App;
