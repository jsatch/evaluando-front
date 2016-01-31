var React = require('react');

var Header = React.createClass({
  render : function(){
    
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">
              Evaluando
            </a>
          </div>
          <div style={ {paddingRight : '30px'} }>
            <button type="button" className="btn btn-default navbar-btn navbar-right">Salir</button>
          </div>
        </div>
      </nav>
    )
  }
});

module.exports = Header;
