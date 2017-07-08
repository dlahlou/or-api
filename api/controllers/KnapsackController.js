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
    knapsackService.solve();
    return res.json({
      todo: 'callKnapsack() is not implemented yet!'
    });
  }
};

