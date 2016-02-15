var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var EvaluationsConstants = require('../constants/EvaluationsConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('request');
var config = require('../config.js');

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
  switch(action.action.actionType){
    case EvaluationsConstants.LIST_EVALUATIONS:
      request.get(config.URL_BACKEND + '/evaluation', function (error, response, body) {
        if (!error && response.statusCode == 200) {
          _evaluations = JSON.parse(body).evaluations;
          EvaluationsStore.emitChange();
        }
      });

    break;
    case EvaluationsConstants.FILTER_EVALUATIONS:
      var termId = action.action.filterValue.termId;
      var queryParams = termId == 0 ? '' : '?term=' + termId;
      request.get(config.URL_BACKEND + '/evaluation' + queryParams ,
        function (error, response, body) {
          if (!error && response.statusCode == 200) {
            _evaluations = JSON.parse(body).evaluations;
            EvaluationsStore.emitChange();
          }
        }
      );
    break;
    case EvaluationsConstants.LIST_TERMS:
      var evaluation = action.action.evaluation;
      request.get(config.URL_BACKEND + '/term', function (error, response, body) {

        if (!error && response.statusCode == 200) {
          _terms = JSON.parse(body).terms;
          EvaluationsStore.emitChange();
        }
      });
    break;
    case EvaluationsConstants.ADD_EVALUATION:
      request.post(config.URL_BACKEND + '/term',
        body: evaluation, function (error, response, body) {
          
        if (!error && response.statusCode == 200) {
          EvaluationsStore.emitChange();
        }
      });
    break;
    default:
      // no op
  }
});

module.exports = EvaluationsStore;
