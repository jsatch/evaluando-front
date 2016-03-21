var React = require('react');

var Navigation = require('../../components/General/Navigation.react');
var ListQuestions = require('./ListQuestions.react');
var CreateQuestion = require('./CreateQuestion.react');
var QuestionInfo = require('./QuestionInfo.react');

var PropTypes = React.PropTypes;

var EditEvaluation = React.createClass({
  propTypes: {
    routesList : PropTypes.array,
    evaluation : PropTypes.object,
    selectedQuestion : PropTypes.object,
    handleCreateQuestion : PropTypes.func,
    handleSelectQuestion : PropTypes.func,
    handleSaveQuestionDetail : PropTypes.func,
    handleSaveEvaluationName : PropTypes.func,
    handleDeleteQuestion : PropTypes.func,
    handleSaveCriteria : PropTypes.func,
    handleUpdateCriteria : PropTypes.func,
    handleDeleteCriteria : PropTypes.func
  },

  render: function() {
    return (
      <div>
        <Navigation routesList={this.props.routesList}/>
        <div className="row">
          <div className="col-md-4">
            <ListQuestions
              evaluationName={this.props.evaluation.nombre}
              questions={this.props.evaluation.questions}
              handleSelectQuestion={this.props.handleSelectQuestion}
              handleSaveEvaluationName={this.props.handleSaveEvaluationName}
              handleDeleteQuestion={this.props.handleDeleteQuestion}/>
            <CreateQuestion handleCreateQuestion={this.props.handleCreateQuestion}/>
          </div>
          <div className="col-md-8">
            <QuestionInfo
              selectedQuestion={this.props.selectedQuestion}
              handleSaveQuestionDetail={this.props.handleSaveQuestionDetail}
              handleSaveCriteria={this.props.handleSaveCriteria}
              handleUpdateCriteria={this.props.handleUpdateCriteria}
              handleDeleteCriteria={this.props.handleDeleteCriteria}
               />
          </div>
        </div>
      </div>
    );
  }

});

module.exports = EditEvaluation;
