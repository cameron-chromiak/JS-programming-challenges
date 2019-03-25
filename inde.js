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

// console.log(typeof(undefined))
// console.log(typeof(null))

// var y = 1;
// if (function f() {}) {
//   y += typeof f;
// }
// console.log(y); //undefined
//
// function x(){}
// console.log(typeof(x)); //function


// // filter() map() forEach()
// let filtArr = [10, 20, 30, 20, 20, 10, 5, 20, 26]
// let bigArr = filtArr.filter(item =>{
//   return item > 25
// })
// console.log('filtArr', filtArr);
// console.log('bigArr', bigArr);
//
// bigArr.forEach((item, i) =>{
//   return bigArr[i] = item*2
// })
// console.log(bigArr);
//
// let mapArr = filtArr.map(item =>{
//   return item * 2
// })
// console.log('Map',mapArr);


// Annograms

// let str1 = 'listen'
// let str2 = 'silent'
//
// function Annograms(str1, str2){
//   let w1 = (str1.split('').sort().join(''));
//   let w2 = (str2.split('').sort().join(''));
//   console.log((w1 === w2));
// }
//
// Annograms(str1, str2)


// for (let i = 0; i < 5; i++) {
// 	setTimeout(function() { console.log(i); }, i * 1000 );
// }

(function () {
    var x, y; // outer and hoisted
    try {
        throw new Error();
    } catch (x /* inner */) {
        x = 1; // inner x, not the outer one
        y = 2; // there is only one y, which is in the outer scope
        console.log(x /* inner */);
    }
    console.log(x);
    console.log(y);
})();
