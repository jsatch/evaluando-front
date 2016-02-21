var React = require('react');

var Error = React.createClass({
  propTypes : {
    errors : React.PropTypes.array,
    onDismiss : React.PropTypes.func,
  },
  render : function () {
    return (
      <div className="alert alert-danger alert-dismissible" role="alert">
        <button type="button" className="close"  onClick={this.props.onDismiss}>
          <span aria-hidden="true">
            &times;
          </span>
        </button>
        Errores
        <ul>
          {
            this.props.errors.map(function(error){
              return (
                <li key={error.field}>
                  { error.message }
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
});

module.exports = Error;
