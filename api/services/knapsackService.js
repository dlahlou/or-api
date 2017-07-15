var Promise = require('bluebird');

module.exports = {
  solve: function(){

    return new Promise( function(resolve, reject){
      const { spawn } = require('child_process');
      const minizinc = spawn('minizinc', ['knapsack.mzn', 'knapsack0.dzn']);

      minizinc.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        console.log("hello world1");
        return resolve(`${data}`);
      });

      minizinc.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`);
        console.log("hello world2");
        return reject(`${data}`);
      });

      minizinc.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
      });
      //console.log("hello world");
      //return resolve("stdout: x = [1, 1, 1]");
    }); 
  }
}

