var React = require('react');

var QuestionCriteriaEdit = require('./QuestionCriteriaEdit.react');

var PropTypes = React.PropTypes;

var QuestionCriterias = React.createClass({
  propTypes: {
    criterias : PropTypes.array,
    handleSaveCriteria : PropTypes.func,
    handleUpdateCriteria : PropTypes.func,
    handleDeleteCriteria : PropTypes.func
  },
  getInitialState: function() {
    return {
      criteriaDetail : '',
      criteriaPoints : ''
    };
  },
  _handleCriteriaDetailChange : function(evt){
    this.setState({
      criteriaDetail : evt.target.value
    });
  },
  _handleCriteriaPointsChange : function(evt){
    this.setState({
      criteriaPoints : evt.target.value
    });
  },
  _handleSaveCriteria : function(){
    this.props.handleSaveCriteria({
      detail : this.state.criteriaDetail,
      points : this.state.criteriaPoints
    });
  },
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Criterios</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            {
              this.props.criterias.map(function(criteria){
                return <QuestionCriteriaEdit
                  key={criteria.id}
                  defaultCriteria={criteria}
                  handleUpdateCriteria={this.props.handleUpdateCriteria}
                  handleDeleteCriteria={this.props.handleDeleteCriteria}/>;
              }, this)
            }
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7">
                  <textarea className="form-control"
                    id="criterio"
                    placeholder="Criterio"
                    onChange={this._handleCriteriaDetailChange}>
                  </textarea>
                </div>
                <div className="col-md-3">
                  <input type="number" className="form-control"
                    id="puntajeCriterio"
                    onChange={this._handleCriteriaPointsChange}/>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary"
                    type="button" onClick={this._handleSaveCriteria}>+</button>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }

});

module.exports = QuestionCriterias;
