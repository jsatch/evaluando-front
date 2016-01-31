var React = require('react');

var Navigation = React.createClass({
  propTypes: {
    routesList: React.PropTypes.array
  },
  render : function(){
    return (
      <ol className="breadcrumb">
        {
          this.props.routesList.map(function(route){
            return (
              <li className="active" key={route.url}>
                <a href={route.url}>{route.name}</a>
              </li>
            )
          })
        }
      </ol>
    )
  }
});

module.exports = Navigation;
