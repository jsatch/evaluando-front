var React = require('react');
var PropTypes = React.PropTypes;

var CreateQuestion = React.createClass({
  propTypes: {
    handleCreateQuestion: PropTypes.func
  },
  render: function() {
    return (
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Agregue pregunta" />
        <span className="input-group-btn">
          <button className="btn btn-primary" type="button">+</button>
        </span>
      </div>
    );
  }

});

module.exports = CreateQuestion;
