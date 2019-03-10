// function sum(x) {
//   if (arguments.length == 2) {
//     return arguments[0] + arguments[1];
//   } else {
//     return function(y) { return x + y; };
//   }
// }
//
// console.log(sum(2,3));   // Outputs 5
// console.log(sum(2)(4));  // Outputs 5

// (function() {
//     console.log(1);
//     setTimeout(function(){console.log(2)}, 1000);
//     setTimeout(function(){console.log(3)}, 0);
//     console.log(4);
// })();

// var d = {}
// var a = [ 'zebra', 'horse' ]
//
// a.forEach(function(k) {
// 	d[k] = undefined;
//   console.log(d);
// })

// for (var i = 0; i < 5; i++) {
// 	setTimeout(function() {
//   console.log(i);
//   }, i * 1000 );
// }

// console.log("0 || 1 = "+(0 || 1));
// console.log("1 || 2 = "+(1 || 0));
// console.log("0 && 1 = "+(1 && 0));
// console.log("1 && 2 = "+(2 && 0));


// !!!!!!!!!!!!!!!!
// var a={},
//     b={key:'b'},
//     c={key:'c'};
//
// a[b]=123;
// a[c]=456;
//
// console.log(a[b]);

i = 5
while(i > 0){
  console.log('*');

  i -=2
}
