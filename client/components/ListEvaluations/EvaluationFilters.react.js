var React = require('react');

var EvaluationFilters = React.createClass({
  propTypes: {
    termsList: React.PropTypes.array,
    handleFilterChange : React.PropTypes.func
  },
  _handleTermChange : function(event){
    this.props.handleFilterChange({
      termId : event.target.value
    });
  },
  render : function(){
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="termFilter">Ciclo:</label>
          <select className="form-control" onChange={this._handleTermChange}>
            <option value="0">
              Todos
            </option>
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
        <input className="btn btn-primary" type="button" value="Nuevo"
          data-toggle="modal" data-target="#modalAddEvaluation"/>
      </form>
    )
  }
});

module.exports = EvaluationFilters;
