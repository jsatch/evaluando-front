var React = require('react');
var objectAssign = require('object-assign');

var EvaluationAddModal = React.createClass({
  propTypes: {
    termsList: React.PropTypes.array
  },
  getInitialState : function(){
    return {
      name : "",
      term : ""
    }
  },
  _handleOnNameChange : function(event){
    this.setState({
      name : event.target.value
    });
  },
  _handleOnTermChange : function(event){
    this.setState({
      term : event.target.value
    });
  },
  render : function(){
    return (
      <div className="modal fade" tabIndex="-1" role="dialog"
        id="modalAddEvaluation">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal"
                aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
              <h4 className="modal-title">Agregar Evaluación</h4>
            </div>
            <div className="modal-body">
              <form className="form-horizontal">
                <div className="form-group">
                  <label htmlFor="name" className="col-sm-4 control-label">
                    Nombre Evaluación :
                  </label>
                  <div className="col-sm-8">
                    <input type="text" className="form-control" id="name"
                      value={this.state.name}
                      onChange={this._handleOnNameChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="term" className="col-sm-4 control-label">
                    Ciclo :
                  </label>
                  <div className="col-sm-8">
                    <select id="term" className="form-control"
                      value={this.state.term}
                      onChange={this._handleOnTermChange}>
                      {
                        this.props.termsList.map(function(term){
                          return (
                            <option key={term.id} value={term.id}>
                              {term.name}
                            </option>
                          )
                        })
                      }
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-default" data-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EvaluationAddModal;
