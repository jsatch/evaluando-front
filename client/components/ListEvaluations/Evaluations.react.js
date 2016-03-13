var React = require('react');
var Navigation = require('../../components/General/Navigation.react');
var EvaluationFilters = require('../../components/ListEvaluations/EvaluationFilters.react');
var EvaluationTable = require('../../components/ListEvaluations/EvaluationTable.react');

var Evaluations = React.createClass({
  propTypes: {
    routesList: React.PropTypes.array,
    termsList: React.PropTypes.array,
    evaluationsList: React.PropTypes.array,
    handleFilterChange : React.PropTypes.func,
    handleEvaluationEdit : React.PropTypes.func
  },
  render : function(){

    return (
      <div>
        <Navigation routesList={this.props.routesList}/>
        <EvaluationFilters
          handleFilterChange={this.props.handleFilterChange}
          termsList={this.props.termsList}/>
        <EvaluationTable
          evaluationsList={this.props.evaluationsList}
          handleEvaluationEdit={this.props.handleEvaluationEdit}/>
      </div>
    )
  }
});

module.exports = Evaluations;
