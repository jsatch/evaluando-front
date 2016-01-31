var React = require('react');

var EvaluationFilters = React.createClass({
  propTypes: {
    termsList: React.PropTypes.array
  },
  render : function(){
    return (
      <form className="form-inline">
        <div className="form-group">
          <label htmlFor="termFilter">Ciclo:</label>
          <select className="form-control">
            <option value="0">
              Todos
            </option>
            {
              this.props.termsList.map(function(term){
                return (
                  <option value="2015-2">
                    Todos
                  </option>
                )
              })
            }

          </select>
        </div>
        <input className="btn btn-primary" type="button" value="Nuevo"/>
      </form>
    )
  }
});

module.exports = EvaluationFilters;
