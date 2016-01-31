var React = require('react');

var EvaluationTable = React.createClass({
  propTypes: {
    evaluationsList: React.PropTypes.array
  },
  render : function(){
    var noItemsMessage = '';
    if (this.props.evaluationsList.length === 0){
      noItemsMessage = <div className="alert alert-info" role="alert">
        No hay evaluaciones</div>;
    }
    return (
      <div>
        {noItemsMessage}
        {
          this.props.evaluationsList.map(function(evaluation){
            return (
              <div className="panel panel-default" key={evaluation.id}>
                <div className="panel-body">
                  <div className="row">
                    <div className="col-md-3">
                      <h4>{evaluation.nombre}</h4>
                      <h5>{evaluation.term.name}</h5>
                    </div>
                    <div className="col-md-9">
                      <div className="btn-group pull-right" role="group" aria-label="...">
                        <button type="button" className="btn btn-default">
                          <span className="glyphicon glyphicon-pencil" >
                          </span>
                        </button>
                        <button type="button" className="btn btn-default">
                          <span className="glyphicon glyphicon-ok" >
                          </span>
                        </button>
                        <button type="button" className="btn btn-default">
                          <span className="glyphicon glyphicon-th-list" >
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
});

module.exports = EvaluationTable;
