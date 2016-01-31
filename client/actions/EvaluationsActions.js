var EvaluationsDispatcher = require('../dispatcher/EvaluationsDispatcher');
var EvaluationsConstants = require('../constants/EvaluationsConstants');

var EvaluationsActions = {
  listEvaluations : function(){
    EvaluationsDispatcher.handleServerAction({
      actionType :EvaluationsConstants.LIST_EVALUATIONS
    });
  },
  filterEvaluations : function(filterValue){
    EvaluationsDispatcher.handleViewAction({
      actionType :EvaluationsConstants.FILTER_EVALUATIONS,
      filterValue : filterValue
    });
  },
  listTerms : function(){
    EvaluationsDispatcher.handleServerAction({
      actionType :EvaluationsConstants.LIST_TERMS
    });
  }
};

module.exports = EvaluationsActions;
