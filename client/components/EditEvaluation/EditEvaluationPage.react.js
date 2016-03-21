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
      evaluation : {
        id : 1,
        nombre : 'EF Programacion Internet',
        questions : [
          {
            id : 1,
            body: 'Pregunta 1',
            criterias : [
              {id:1, detail: 'Criterio 1', points : 3}
            ]
          },
          {
            id : 2,
            body: 'Pregunta 2',
            criterias : [
              {id:1, detail: 'Criterio 1', points : 2}
            ]
          },
        ]
      },
      selectedQuestion : null
    };
  },
  _handleCreateQuestion : function(questionBody){
    console.log('EditEvaluationPage _handleCreateQuestion', questionBody);
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
