var React = require('react');
var Header = require('../../components/General/Header.react');
var Menu = require('../../components/General/Menu.react');
var Evaluations = require('../../components/ListEvaluations/Evaluations.react');
var EvaluationAddModal = require('../../components/ListEvaluations/EvaluationAddModal.react');
var EvaluationsStore = require('../../stores/EvaluationsStore');
var EvaluationsActions = require('../../actions/EvaluationsActions');

var ListEvaluationsPage = React.createClass({
  getInitialState: function() {
    return {
      routesList : [{url:'#', name:'Evaluaciones'}],
      termsList : [],
      evaluationsList : []
    }
  },
  componentDidMount: function() {
    EvaluationsStore.addChangeListener(this._onChange);
    $.blockUI({ message: '<h2> Espere unos segundos...</h2>' });
    EvaluationsActions.listEvaluations();
    EvaluationsActions.listTerms();
  },
  componentWillUnmount: function() {
    EvaluationsStore.removeChangeListener(this._onChange);
  },
  _onChange : function(){
    $.unblockUI();
    this.setState({
      routesList : [{url:'#', name:'Evaluaciones'}],
      termsList : EvaluationsStore.getTerms(),
      evaluationsList : EvaluationsStore.getEvaluations()
    });
  },
  handleFilterChange : function(filterValue){
    EvaluationsActions.filterEvaluations(filterValue);
  },
  handleAddEvaluation : function(name, term){
    EvaluationsActions.addEvaluation({
      nombre : name,
      termId : term
    });
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
            <Evaluations
              handleFilterChange={this.handleFilterChange}
              routesList={this.state.routesList}
              termsList={this.state.termsList}
              evaluationsList={this.state.evaluationsList}/>
          </div>
        </div>
        <EvaluationAddModal
          termsList={this.state.termsList}
          handleAddEvaluation={this.handleAddEvaluation}/>
      </div>
    )
  }
});

module.exports = ListEvaluationsPage;
