var React = require('react');
var PropTypes = React.PropTypes;

var QuestionCriteriaEdit = React.createClass({
  propTypes: {
    defaultCriteria : PropTypes.object,
    handleUpdateCriteria : PropTypes.func,
    handleDeleteCriteria : PropTypes.func
  },
  getInitialState: function() {
    return {
      state : 'r',
      criteriaId : this.props.defaultCriteria.id,
      criteriaDetail : this.props.defaultCriteria.detail,
      criteriaPoints : this.props.defaultCriteria.points
    };
  },
  _handleOnCriteriaDetailChange : function(evt){
    this.setState({
      criteriaDetail : evt.target.value
    });
  },
  _handleOnCriteriaPointsChange : function(evt){
    this.setState({
      criteriaPoints : evt.target.value
    });
  },
  _handleOnCriteriaEdit : function(){
    this.setState({
      state : 'w'
    });
  },
  _handleOnCriteriaSave : function(){
    this.props.handleUpdateCriteria({
      'id' : this.state.criteriaId,
      'detail' : this.state.criteriaDetail,
      'points' : this.state.criteriaPoints
    });
    this.setState({
      state : 'r'
    });
  },
  _handleOnCriteriaDelete : function(){
    this.props.handleDeleteCriteria(this.state.criteriaId);
    this.setState({
      state : 'r'
    });
  },
  render: function() {
    return (
      <li className="list-group-item" key={this.state.criteriaId}>
        <div className="row">
          <div className="col-md-7">
            {
              (function(){
                  if (this.state.state === 'r'){
                    return this.state.criteriaDetail;
                  }else{
                    return <input type="text"
                      value={this.state.criteriaDetail}
                      onChange={this._handleOnCriteriaDetailChange} />
                  }
              }.bind(this))()
            }
          </div>
          <div className="col-md-3">
            {
              (function(){
                  if (this.state.state === 'r'){
                    return this.state.criteriaPoints;
                  }else{
                    return <input type="text"
                      value={this.state.criteriaPoints}
                      onChange={this._handleOnCriteriaPointsChange} />
                  }
              }.bind(this))()
            }
          </div>
          <div className="col-md-2">
            <div className="pull-right">
              {
                (function(){
                    if (this.state.state === 'r'){
                      return <span className="glyphicon glyphicon-pencil"
                        aria-hidden="true"
                        onClick={this._handleOnCriteriaEdit}>
                      </span>
                    }else{
                      return <span className="glyphicon glyphicon-floppy-disk"
                        aria-hidden="true"
                        onClick={this._handleOnCriteriaSave}></span>
                    }
                }.bind(this))()
              }
              <span className="glyphicon glyphicon-remove"
                aria-hidden="true"
                onClick={this._handleOnCriteriaDelete}>
              </span>
            </div>
          </div>
        </div>
      </li>
    );
  }

});

module.exports = QuestionCriteriaEdit;
