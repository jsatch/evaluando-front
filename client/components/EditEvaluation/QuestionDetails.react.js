var React = require('react');
var PropTypes = React.PropTypes;

var QuestionsDetails = React.createClass({
  propTypes: {
    selectedQuestion : PropTypes.object
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">
            Información Pregunta
            <div className="pull-right">
              <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
            </div>
          </h3>

        </div>
        <div className="panel-body">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="texto" className="col-md-2 control-label">Texto</label>
              <div className="col-md-10">
                <textarea className="form-control" id="texto"></textarea>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="puntaje" className="col-md-2 control-label">Puntaje</label>
              <div className="col-md-10">
                <input type="number" className="form-control" id="puntaje" placeholder="Puntaje" />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }

});

module.exports = QuestionsDetails;
