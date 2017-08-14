var Promise = require('bluebird');

module.exports = {
  solve: function(){

    return new Promise( function(resolve, reject){
      const { spawn } = require('child_process');

      //First we check if the minizinc command can be found?
      const check_minizinc = spawn('which', ['minizinc']);

      //Yes?
      check_minizinc.stdout.on('data', (data) => {

          //Then we call minizinc with the appropriate model and data
          const minizinc = spawn('minizinc', ['knapsack.mzn', 'knapsack1.dzn'], {cwd: process.cwd()+'/or-models/knapsack'});

          //We got some solutions
          minizinc.stdout.on('data', (data) => {
            sails.log.info(`stdout: ${data}`);
            return resolve(`${data}`);
          });

          //The command closed
          minizinc.on('close', (code) => {
            sails.log.silly(`minizinc child process exited with code ${code}`);
          });

          //Unexpected error, maybe the file name was not good
          minizinc.stderr.on('data', (data) => {
            sails.log.error(`stderr: ${data}`);
            return reject(`${data}`);
          });
      });


      //No!
      check_minizinc.on('close', (code) => {
        var f_code = `${code}`;
        sails.log.silly(`check minizinc process exited with code ${code}`);
        if(f_code == "1"){
          sails.log.error("minizinc command could not be found!");
          return reject("minizinc command could not be found!");
        }
      });


    }); 
  }
}

