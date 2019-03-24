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

// fibbonocci

// function fibbonocci(){
//   let n1 = 1
//   let n2 = 1
//   let i = 0
//   let max = 10
//
//
//   while(i < max){
//     n1 = n1 + n2
//     n2 = n1 - n2
//     console.log(n1);
//     i+=1
//   }
// }
// fibbonocci()

// function scope(){
//   for(var i = 0; i<5; i++){
//     console.log(i);
//   }console.log(i);
// }
//
// scope()


// function sortThis(){
//   let arr = [3, 1, 'a', 5]
//
//   arr.sort((a, b)=>{
//     if(a < b){
//       return -1
//     }else{
//       return 1
//     }
//   })
//   console.log(arr);
// }
// sortThis()
//
// const formatDuration = ms => {
//   if (ms < 0) ms = -ms;
//   const time = {
//     day: Math.floor(ms / 86400000),
//     hour: Math.floor(ms / 3600000) % 24,
//     minute: Math.floor(ms / 60000) % 60,
//     second: Math.floor(ms / 1000) % 60,
//     millisecond: Math.floor(ms) % 1000
//   };
//   return Object.entries(time)
//     .filter(val => val[1] !== 0)
//     .map(([key, val]) => `${val} ${key}${val !== 1 ? 's' : ''}`)
//     .join(', ');
// };

//fibb
// let n1 = 1
// let n2 = 1
//
// while(n1 < 25){
//   n1 = n1 + n2
//   console.log('n2',n2);
//   n2 = n1 - n2
//
//   console.log(n1);
// }
//
// //====
// var x = '6'
// var y = 6
//
// console.log(x === y);
// console.log(x == y);

// let vs var

// helpMe = () =>{
//   for(let i = 0; i<10; i++){
//     console.log(i);
//   }
//   // console.log(i);
//
//   for(var j = 0; j<10; j++){
//     console.log('j',j);
//   }
//   console.log('outside j',j);
// }
//
// helpMe()
