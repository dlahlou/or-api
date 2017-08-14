/**
 * KnapsackController
 *
 * @description :: Server-side logic for managing knapsacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /**
   * `KnapsackController.callKnapsack()`
   */


  callKnapsack: function (req, res) {
    knapsackService.solve().then(results => {
    	res.ok({"results": results}, "knapsack.ejs");
    }).catch(error => {
        res.serverError({"error": error});
    });
  }
};

