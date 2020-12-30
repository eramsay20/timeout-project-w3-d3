/***********************************************************************
Write a function `intervalCount` that accepts a callback, a delay in
milliseconds, and an amount. The function should set an interval with
the given callback and delay, but clear the interval after the callback
has been executed 'amount' number of times.

Hint: utilize a 'closure' to your advantage
// set interval, n when n = reached
use closure
accepts callback, delay and count num
initialize a global count
count iterated up to count => clear interval
***********************************************************************/
let count = 0

let intervalCount = (cb, ms, num) =>{

    let int = setInterval(function(){
      count++;                          // increment towards num
      cb();                             // call callback

      if (count === num) {              // set stop condition
        clearInterval(int)
      }
    }, ms);
}

intervalCount(function() {
    console.log('hi');
}, 500, 3); // prints 'hi' at 500ms intervals a total of 3 times
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
  module.exports = intervalCount;
} catch {
  module.exports = null;
}
