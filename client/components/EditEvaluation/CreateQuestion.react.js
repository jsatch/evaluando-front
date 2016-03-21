var React = require('react');
var PropTypes = React.PropTypes;

var CreateQuestion = React.createClass({
  propTypes: {
    handleCreateQuestion: PropTypes.func
  },
  getInitialState: function() {
    return {
      questionBody : ''
    };
  },
  _handleOnQuestionBodyChange : function(evt){
    this.setState({
      questionBody : evt.target.value
    });
  },
  _handleCreateQuestion : function(){
    this.props.handleCreateQuestion(this.state.questionBody);
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control"
          placeholder="Agregue pregunta"
          value={this.state.questionBody}
          onChange={this._handleOnQuestionBodyChange} />
        <span className="input-group-btn">
          <button className="btn btn-primary"
            type="button"
            onClick={this._handleCreateQuestion}>+</button>
        </span>
      </div>
    );
  }

});

module.exports = CreateQuestion;
