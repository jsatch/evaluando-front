var React = require('react');

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
  _handleOnNameChange : function(){
    
  },
  render : function(){
    return (
      <div className="modal fade" tabindex="-1" role="dialog"
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
                      value={this.state.name} >
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="term" className="col-sm-4 control-label">
                    Ciclo :
                  </label>
                  <div className="col-sm-8">
                    <select id="term" className="form-control"
                      value={this.state.term}>
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
          </div><!-- /.modal-content -->
        </div>
      </div>
    )
  }
});

module.exports = EvaluationAddModal;
