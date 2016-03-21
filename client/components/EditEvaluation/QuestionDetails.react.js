var React = require('react');
var PropTypes = React.PropTypes;

var QuestionsDetails = React.createClass({
  propTypes: {
    selectedQuestion : PropTypes.object,
    handleSaveQuestionDetail : PropTypes.func
  },
  getInitialState: function() {
    return {
      questionId : this.props.selectedQuestion.id,
      questionBody : this.props.selectedQuestion.body,
      questionPoints : this.props.selectedQuestion.points
    };
  },
  _handleOnQuestionBodyChange : function(evt){
    this.setState({
      questionBody : evt.target.value
    });
  },
  _handleOnQuestionPointsChange : function(evt){
    this.setState({
      questionPoints : evt.target.value
    });
  },
  handleOnSaveQuestion : function(){
    this.props.handleSaveQuestionDetail({
      'id' : this.state.questionId,
      'body' : this.state.questionBody,
      'points' : this.state.questionPoints
    });
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            Información Pregunta
            <div className="pull-right">
              <span className="glyphicon glyphicon-floppy-disk"
                aria-hidden="true"
                onClick={this.handleOnSaveQuestion}></span>
            </div>
          </h3>

        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="texto" className="col-md-2 control-label">Texto</label>
              <div className="col-md-10">
                <textarea className="form-control" id="texto"
                  value={this.props.selectedQuestion.body}
                  onChange={this._handleOnQuestionBodyChange}>
                </textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="puntaje" className="col-md-2 control-label">Puntaje</label>
              <div className="col-md-10">
                <input type="number" className="form-control"
                  id="puntaje"
                  placeholder="Puntaje"
                  onChange={this._handleOnQuestionPointsChange} />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionsDetails;
