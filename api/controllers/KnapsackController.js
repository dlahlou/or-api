/**
 * KnapsackController
 *
 * @description :: Server-side logic for managing knapsacks
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Promise= require('promise');

module.exports = {


  /**
   * `KnapsackController.callKnapsack()`
   */


  callKnapsack: function (req, res) {
    knapsackService.solve().then(function(results){
    	console.log(`stdout: results`);
    	return res.json({"results": results});
    });
  }
};

