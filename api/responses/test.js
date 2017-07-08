// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 6.4.0)
 var ops = S.split(" ");
 var stack = [];

 ops.forEach(function(op){
  switch(op) {
    case "DUP"){
     var i = stack.pop();
     stack.push(i);
     stack.push(i);
    }
    case "POP"){
     var i = stack.pop();
    }
    case "+"){
     var i = stack.pop();
     var j = stack.pop();
     stack.push(i+j);
    }
    case "-"){
     var i = stack.pop();
     var j = stack.pop();
     stack.push(i-j);
    }
  }
  

 });

}