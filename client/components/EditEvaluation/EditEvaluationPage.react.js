var React = require('react');

var QuestionsStore = require('../../stores/QuestionsStore');
var QuestionsActions = require('../../actions/QuestionsActions');

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
      evaluation : {},
      selectedQuestion : null
    };
  },
  _handleCreateQuestion : function(questionBody){
    console.log('EditEvaluationPage _handleCreateQuestion', questionBody);
    var pathParameters = window.location.pathname.split('/');
    var evaluationId = parseInt(pathParameters[2]);
    QuestionsActions.createQuestion(evaluationId, questionBody);
  },
  _handleSelectQuestion : function(questionId){
    console.log('EditEvaluationPage', 'TODO: _handleSelectQuestion id:'+questionId);
    // This code MUST be changed
    this.setState({
      selectedQuestion : this.state.evaluation.questions[questionId]
    });
  },
  _handleSaveQuestionDetail : function(question){
    console.log('EditEvaluationPage _handleSaveQuestionDetail', 'TODO: ' + question.body);
  },
  _handleDeleteQuestion : function(questionId){
    console.log('EditEvaluationPage', 'TODO: _handleDeleteQuestion id:' + questionId);
  },
  _handleSaveEvaluationName : function(name){
    console.log('EditEvaluationPage', 'TODO: _handleSaveEvaluationName name:' + name);
  },
  _handleSaveCriteria : function(criteria){
    console.log('EditEvaluationPage _handleSaveCriteria', criteria);
  },
  _handleUpdateCriteria : function(criteria){
    console.log('EditEvaluationPage _handleUpdateCriteria', criteria);
  },
  _handleDeleteCriteria : function(criteriaId){
    console.log('EditEvaluationPage _handleDeleteCriteria', criteriaId);
  },
  _onEvaluationLoaded : function(){
    console.log('EditEvaluationPage _onEvaluationLoaded');
    this.setState({
      evaluation : QuestionsStore.getEvaluation()
    });
  },
  _onEvaluationModify : function(){
    var pathParameters = window.location.pathname.split('/');
    var evaluationId = parseInt(pathParameters[2]);
    setTimeout(function(){
      QuestionsActions.getEvaluation(evaluationId)
    }, 0);

  },
  componentWillMount: function() {
    QuestionsStore.addChangeListener(
      QuestionsStore.estados.ON_EVALUATION_LOADED,
      this._onEvaluationLoaded
    );
    QuestionsStore.addChangeListener(
      QuestionsStore.estados.ON_EVALUATION_MODIFY,
      this._onEvaluationModify
    );

    var pathParameters = window.location.pathname.split('/');
    QuestionsActions.getEvaluation(parseInt(pathParameters[2]));
  },
  componentWillUnmount: function() {
    QuestionsStore.removeChangeListener(QuestionsStore.estados.ON_EVALUATION_LOADED,
      this._onEvaluationLoaded);
      QuestionsStore.removeChangeListener(QuestionsStore.estados.ON_EVALUATION_MODIFY,
        this._onEvaluationModify);
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
            <EditEvaluation
              routesList={this.state.routesList}
              evaluation={this.state.evaluation}
              selectedQuestion={this.state.selectedQuestion}
              handleCreateQuestion={this._handleCreateQuestion}
              handleSelectQuestion={this._handleSelectQuestion}
              handleSaveQuestionDetail={this._handleSaveQuestionDetail}
              handleSaveEvaluationName={this._handleSaveEvaluationName}
              handleDeleteQuestion={this._handleDeleteQuestion}
              handleSaveCriteria={this._handleSaveCriteria}
              handleUpdateCriteria={this._handleUpdateCriteria}
              handleDeleteCriteria={this._handleDeleteCriteria}
              />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EditEvaluationPage;
