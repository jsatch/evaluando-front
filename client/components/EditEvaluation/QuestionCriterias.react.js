var React = require('react');
var PropTypes = React.PropTypes;

var QuestionCriterias = React.createClass({
  propTypes: {
    criterias : PropTypes.array
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
                return <li className="list-group-item" key={criteria.id}>
                  <div className="row">
                    <div className="col-md-7">
                      {criteria.detail}
                    </div>
                    <div className="col-md-3">
                      {criteria.points}
                    </div>
                    <div className="col-md-2">
                      <div className="pull-right">
                        <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                      </div>
                    </div>
                  </div>
                </li>;
              })
            }
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7">
                  <textarea className="form-control" id="criterio" placeholder="Criterio"></textarea>
                </div>
                <div className="col-md-3">
                  <input type="number" className="form-control" id="puntajeCriterio"/>
                </div>
                <div className="col-md-2">
                  <button className="btn btn-primary" type="button">+</button>
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
