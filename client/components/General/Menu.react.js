var React = require('react');

var Menu = React.createClass({
  render : function(){
    return (
      <ul className="nav nav-pills nav-stacked">
        <li role="presentation" className="active"><a href="#">Evaluaciones</a></li>
        <li role="presentation"><a href="parametros.html">Parámetros</a></li>
      </ul>
    )
  }
});

module.exports = Menu;
