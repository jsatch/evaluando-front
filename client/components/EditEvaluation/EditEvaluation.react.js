var React = require('react');

var Navigation = require('../../components/General/Navigation.react');

var PropTypes = React.PropTypes;

var EditEvaluation = React.createClass({
  propTypes: {
    routesList : PropTypes.array
  },

  render: function() {
    return (
      <div>
        <Navigation routesList={this.props.routesList}/>
        <div className="row">
          <div className="col-md-4">
            <ul className="list-group">
              <li className="list-group-item">
                <h4>
                  Examen Parcial del curso Programacion Internet saddasadada
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                  </div>
                </h4>
              </li>
              <li className="list-group-item">
                <div>
                  Pregunta 1.
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </li>
              <li className="list-group-item">
                <div>
                  Pregunta 2.
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                    <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                  </div>
                </div>
              </li>

            </ul>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Agregue pregunta" />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">+</button>
              </span>
            </div>
          </div>
          <div className="col-md-8">


            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">
                  Información Pregunta
                  <div className="pull-right">
                    <span className="glyphicon glyphicon-floppy-disk" aria-hidden="true"></span>
                  </div>
                </h3>

              </div>
              <div className="panel-body">
                <form className="form-horizontal">
                  <div className="form-group">
                    <label htmlFor="etiqueta" className="col-md-2 control-label">Etiqueta</label>
                    <div className="col-md-10">
                      <input type="text" className="form-control" id="etiqueta" placeholder="Etiqueta" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="texto" className="col-md-2 control-label">Texto</label>
                    <div className="col-md-10">
                      <textarea className="form-control" id="texto"></textarea>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="puntaje" className="col-md-2 control-label">Puntaje</label>
                    <div className="col-md-10">
                      <input type="number" className="form-control" id="puntaje" placeholder="Puntaje" />
                    </div>
                  </div>
                </form>
              </div>
            </div>


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

          </div>
        </div>
      </div>
    );
  }

});

module.exports = EditEvaluation;
