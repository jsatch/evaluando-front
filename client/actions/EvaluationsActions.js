var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var EvaluationsConstants = require('../constants/EvaluationsConstants');

var EvaluationsActions = {
  listEvaluations : function(){
    EvaluationsDispatcher.handleServerAction({
      actionType :EvaluationsConstants.LIST_EVALUATIONS
    });
  },
  listTerms : function(){
    EvaluationsDispatcher.handleServerAction({
      actionType :EvaluationsConstants.LIST_TERMS
    });
  }
};

module.exports = EvaluationsActions;
