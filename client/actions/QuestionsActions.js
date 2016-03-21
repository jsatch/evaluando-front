var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var QuestionsConstants = require('../constants/QuestionsConstants');

var QuestionsActions = {
  getEvaluation : function(evaluationId){
    EvaluationsDispatcher.handleServerAction({
      actionType :QuestionsConstants.GET_EVALUATION,
      evaluationId : evaluationId
    });
  },
  createQuestion : function(evaluationId, questionBody){
    EvaluationsDispatcher.handleViewAction({
      actionType :QuestionsConstants.CREATE_QUESTION,
      evaluationId : evaluationId,
      questionBody : questionBody
    });
  }
};

module.exports = QuestionsActions;
