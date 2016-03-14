var React = require('react');
var PropTypes = React.PropTypes;

var QuestionCriterias = React.createClass({

  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">Criterios</h3>
        </div>
        <div className="panel-body">
          <ul className="list-group">
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7">
                  Este es un criterio de calificacion 1
                </div>
                <div className="col-md-3">
                  4
                </div>
                <div className="col-md-2">
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7">
                  Este es un criterio de calificacion 2
                </div>
                <div className="col-md-3">
                  4
                </div>
                <div className="col-md-2">
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">
              <div className="row">
                <div className="col-md-7">
                  Este es un criterio de calificacion 3
                </div>
                <div className="col-md-3">
                  4
                </div>
                <div className="col-md-2">
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </div>
            </li>
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
