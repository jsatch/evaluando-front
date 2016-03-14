var React = require('react');

var EvaluationNameEdit = require('./EvaluationNameEdit.react');

var PropTypes = React.PropTypes;

var ListQuestions = React.createClass({
  propTypes: {
    evaluationName : PropTypes.string,
    questions : PropTypes.array,
    handleSelectQuestion : PropTypes.func,
    handleSaveEvaluationName : PropTypes.func,
    handleDeleteQuestion : PropTypes.func
  },
  _handleOnEditQuestion : function(questionId){
    this.props.handleSelectQuestion(questionId);
  },
  _handleOnDeleteQuestion : function(questionId){
    this.props.handleDeleteQuestion(questionId);
  },
  render: function() {
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <EvaluationNameEdit
            defaultName={this.props.evaluationName}
            handleSaveEvaluationName={this.props.handleSaveEvaluationName}/>
        </li>

        {
          this.props.questions.map(function(question){
            return <li className="list-group-item" key={question.id}>
              <div>
                {question.body}
                <div className="pull-right">
                  <span
                    className="glyphicon glyphicon-pencil"
                    aria-hidden="true"
                    onClick={this._handleOnEditQuestion.bind(this, question.id)}>
                  </span>
                  <span
                    className="glyphicon glyphicon-remove"
                    aria-hidden="true"
                    onClick={this._handleOnDeleteQuestion.bind(this, question.id)}>
                  </span>
                </div>
              </div>
            </li>
          }, this)
        }
      </ul>
    );
  }

});

module.exports = ListQuestions;
