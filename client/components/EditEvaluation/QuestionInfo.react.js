var React = require('react');

var QuestionDetails = require('./QuestionDetails.react');
var QuestionCriterias = require('./QuestionCriterias.react');

var PropTypes = React.PropTypes;

var QuestionInfo = React.createClass({
  propTypes: {
    selectedQuestion: PropTypes.object,
    handleSaveQuestionDetail : PropTypes.func,
    handleSaveCriteria : PropTypes.func,
    handleUpdateCriteria : PropTypes.func,
    handleDeleteCriteria : PropTypes.func
  },
  render: function() {
    var mostrar = null;
    if (this.props.selectedQuestion == null){
      mostrar = <div className="alert alert-info" role="alert">Seleccione una pregunta para editarla</div>;
    }else{
      mostrar = <div>
        <QuestionDetails
          selectedQuestion={this.props.selectedQuestion}
          handleSaveQuestionDetail={this.props.handleSaveQuestionDetail}
          />
        <QuestionCriterias
          criterias={this.props.selectedQuestion.criterias}
          handleSaveCriteria={this.props.handleSaveCriteria}
          handleUpdateCriteria={this.props.handleUpdateCriteria}
          handleDeleteCriteria={this.props.handleDeleteCriteria}/>
      </div>;
    }
    return (
      <div>
      {mostrar}
      </div>
    );
  }

});

module.exports = QuestionInfo;
