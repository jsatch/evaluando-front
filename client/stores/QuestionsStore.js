var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var QuestionsConstants = require('../constants/QuestionsConstants');

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var request = require('request');
var config = require('../config.js');

var _evaluation = {};

var QuestionsStore = assign({},
  EventEmitter.prototype,
  {
    estados : {
      ON_EVALUATION_LOADED : 'ON_EVALUATION_LOADED',
      ON_EVALUATION_MODIFY : 'ON_EVALUATION_MODIFY'
    },
    getEvaluation : function(){
      return _evaluation;
    },
    emitOnEvaluationLoaded : function() {
      this.emit(this.estados.ON_EVALUATION_LOADED);
    },
    emitOnEvaluationModify : function(){
      this.emit(this.estados.ON_EVALUATION_MODIFY);
    },
    addChangeListener : function(id, callback) {
      this.on(id, callback);
    },
    removeChangeListener: function(id, callback) {
      this.removeListener(id, callback);
    }
  }
);

EvaluationsDispatcher.register(function(action){
  switch(action.action.actionType){
    case QuestionsConstants.GET_EVALUATION:
      var evaluationId = action.action.evaluationId;

      _evaluation = {
        id : 1,
        nombre : 'EF Programacion Internet',
        questions : [
          {
            id : 1,
            body: 'Pregunta 1',
            criterias : [
              {id:1, detail: 'Criterio 1', points : 3}
            ]
          },
          {
            id : 2,
            body: 'Pregunta 2',
            criterias : [
              {id:1, detail: 'Criterio 1', points : 2}
            ]
          },
        ]
      };
      QuestionsStore.emitOnEvaluationLoaded();
    break;
    case QuestionsConstants.CREATE_QUESTION:
      var evaluationId = action.action.evaluationId;
      var questionBody = action.action.questionBody;

      // TODO: Este es un ejemplo
      _evaluation.questions.push({
        id : 0,
        body : questionBody,
        criterias : []
      });

      QuestionsStore.emitOnEvaluationModify();
    break;
    case QuestionsConstants.UPDATE_QUESTION:
    break;
    case QuestionsConstants.DELETE_QUESTION:
    break;
  }
});

module.exports = QuestionsStore;
