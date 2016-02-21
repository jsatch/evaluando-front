var React = require('react');

var Error = require('../../components/General/Error.react');

var objectAssign = require('object-assign');
var schema = require('async-validator');
var descriptor = {
  name: {
    type: "string",
    required: true,
    message: "Debe ingresar nombre de evaluación"
  },
  term : {
    type : "number",
    min : 1,
    message: "Debe seleccionar un ciclo"
  }
}

var EvaluationAddModal = React.createClass({
  propTypes: {
    termsList: React.PropTypes.array,
    handleAddEvaluation : React.PropTypes.func
  },
  getInitialState : function(){
    return {
      error : false,
      errors : [],
      name : "",
      term : 0
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
  _handleOnAddEvaluation : function(){
    var validator = new schema(descriptor);
    validator.validate({
      name: this.state.name,
      term : parseInt(this.state.term)
    }, function(errors, fields){
      if (errors){
        // Validation error
        this.setState(
          {
            error : true,
            errors : errors
          }
        );
      }else{
        // Validation pass
        this.setState({
          error : false,
          errors : [],
          name : "",
          term : 0
        });
        this.props.handleAddEvaluation(this.state.name, parseInt(this.state.term));
      }
    }.bind(this));
  },
  _onDismissAlert : function(){
    this.setState(
      {
        error : false,
        errors : []
      }
    );
  },
  render : function(){
    var error;
    if (this.state.error){
      error = <Error
        errors={this.state.errors}
        onDismiss={this._onDismissAlert}/>
    }
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
              {error}
              <form className="form-horizontal" id="addEvalForm">
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
                      <option value="0">--Seleccione--</option>
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
              <button type="button" className="btn btn-default"
                data-dismiss="modal">
                Cerrar
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={this._handleOnAddEvaluation}>
                Guardar
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

module.exports = EvaluationAddModal;
