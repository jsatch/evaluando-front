var React = require('react');
var PropTypes = React.PropTypes;

var EvaluationNameEdit = React.createClass({
  propTypes: {
    defaultName : PropTypes.string,
    handleSaveEvaluationName : PropTypes.func
  },
  getInitialState: function() {
    return {
      state : 'r',
      name : this.props.defaultName
    };
  },
  _handleEditName : function(){
    this.setState({
      state : 'w'
    });
  },
  _handleSaveName : function(){
    this.setState({
      state : 'r'
    });
    this.props.handleSaveEvaluationName(this.state.name);
  },
  _handleOnChangeName : function(event){
    this.setState({
      name : event.target.value
    });
  },
  render: function() {
    return (
      <h4>
        {
          (function(){
            if (this.state.state === 'r'){
              return <div>
                {this.state.name}
                <div className="pull-right">
                  <span
                    className="glyphicon glyphicon-pencil"
                    aria-hidden="true"
                    onClick={this._handleEditName}>
                  </span>
                </div>
              </div>;
            }else{
              return <div>
                <input type="text" className="form-control"
                  value={this.state.name}
                  onChange={this._handleOnChangeName} />
                <div className="pull-right">
                  <span
                    className="glyphicon glyphicon-floppy-disk"
                    aria-hidden="true"
                    onClick={this._handleSaveName}>
                  </span>
                </div>
              </div>
            }
          }.bind(this))()
        }

      </h4>
    );
  }

});

module.exports = EvaluationNameEdit;
