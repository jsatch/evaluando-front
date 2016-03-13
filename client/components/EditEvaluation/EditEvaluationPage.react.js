var React = require('react');

var Header = require('../General/Header.react');
var Menu = require('../General/Menu.react');
var EditEvaluation = require('./EditEvaluation.react');

var EditEvaluationPage = React.createClass({
  getInitialState: function() {
    return {
      routesList : [
        {url:'/', name:'Evaluaciones'},
        {url:'#', name:'Editar'}
      ],
    };
  },

  render: function() {
    return (
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-md-3">
            <Menu />
          </div>
          <div className="col-md-9">
            <EditEvaluation routesList={this.state.routesList}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EditEvaluationPage;
