var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var EvaluationsConstants = require('../constants/EvaluationsConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('request');

var CHANGE_EVENT = 'change';

var _terms = [];
var _evaluations = [];

var EvaluationsStore = assign({},
  EventEmitter.prototype,
  {
    getTerms : function(){
      return _terms;
    },
    getEvaluations : function(){
      return _evaluations;
    },
    emitChange : function() {
      this.emit(CHANGE_EVENT);
    },
    addChangeListener : function(callback) {
      this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
      this.removeListener(CHANGE_EVENT, callback);
    }
  }
);

EvaluationsDispatcher.register(function(action){
  console.log('ACTION:', action);
  switch(action.action.actionType){
    case EvaluationsConstants.LIST_EVALUATIONS:
      console.log("Se llamo al action de LIST_EVALUATIONS:" , action);
      request.get('http://localhost:5000/evaluation', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage.
          _evaluations = body;
          EvaluationsStore.emitChange();
        }
      });

    break;
    case EvaluationsConstants.LIST_TERMS:
      console.log("Se llamo al action de LIST_TERMS");
      request.get('http://localhost:5000/term', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body) // Show the HTML for the Google homepage.
          _terms = body;
          EvaluationsStore.emitChange();
        }
      });
    break;
    default:
      // no op
  }
});

module.exports = EvaluationsStore;
