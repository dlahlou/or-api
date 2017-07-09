
module.exports = {
  solve: function(){
   
    const { spawn } = require('child_process');
    const ls = spawn('minizinc', ['knapsack.mzn', 'knapsack0.dzn']);

    //const ls = spawn('pwd', []);

    ls.stdout.on('data', (data) => {
      console.log(`stdout: ${data}`);
    });

    ls.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`);
    });

    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
  }
}

