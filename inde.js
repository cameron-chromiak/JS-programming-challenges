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


//change var to let
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

// (function () {
//     var x, y; // outer and hoisted
//     try {
//         throw new Error();
//     } catch (x /* inner */) {
//         x = 1; // inner x, not the outer one
//         y = 2; // there is only one y, which is in the outer scope
//         console.log(x /* inner */);
//     }
//     console.log(x);
//     console.log(y);
// })();


// let arr = ['c', 'a', 't']
// function reverseInPlace(arr) {
//
//   let newArr = []
//   let i = 0
//
//   while(i < arr.length){
//     let char = arr.pop()
//     newArr.push(char)
//   }
//   newArr = newArr.join('')
//   console.log(newArr);
// }
// reverseInPlace(arr)

//
// (function (){
//   let word = 'word'
//
//   let arr =  word.split('')
//   let reword = arr.join('')
//   console.log(reword);
// })()

//
// function isPalindrome(){
//   let word = 'racecar'
//
//   let arr = word.split('').reverse().join('')
//   console.log((arr == word) ? true:false);
//
// }
//
// isPalindrome()


// Write a function that receives a radius as a parameter, and returns the area of a circle: Pi * r^2
//
// function calcArea(r){
//     return (r**2) * 3.14
// }
//
// calcArea(2)

// Write a function that takes in a time as a string and returns it in Military Time.
// “10:31 AM” -> “10:31”
// “2:05 PM” -> “14:05”
// “12:01 AM” -> “00:01”
// “7:00 AM” -> “07:00”
//
// function convertTime(time){
//
//   if(time.includes('PM')){
//     let temp = time.split(' ')
//     temp.pop()
//     hoursAndMinutes = temp[0].split(':')
//     let hour = Number(hoursAndMinutes[0]) + 12
//     let min = hoursAndMinutes[1]
//     console.log(`${time} converted is ${hour}:${min}`)
//   }
//   else if(time.includes('AM')){
//     let temp = time.split(' ')
//     temp.pop()
//     let hoursAndMinutes = temp[0].split(':')
//     let hour = hoursAndMinutes[0]
//     let min = hoursAndMinutes[1]
//     if(hour.length <= 1){
//       hour =  '0' + hoursAndMinutes[0]
//     }
//     (hour == '12') ?  hour = '00' : hour
//     console.log(`${time} converted is ${hour}:${min}`)
//   }
//   else{
//     console.log(`Improper format, ${time}`);
//   }
//
// }
//
//
// times = ['10:31 AM', '2:05 PM', '12:01 AM', '7:00 AM', '12:45 AM', '12: 34', '7:47 PM', '2:04 AM', '5:55 PM']
//
// times.forEach( time =>{
//   convertTime(time)
// })
//
// determine if it is AM or PM
// remove 'AM' or 'PM' splitting at space
// split again at colon
// if (AM)
//   hour will be first element in that array, do math on it
//   concat new hour with minutes
// if (PM):
//   determine if hour value need a 0 to make the end length 4 instead of 3 (3:00 --> 03:00)
//   otherwise hour = hours
//   print and concat



// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');



// //Cameron Chromiak
// //cameron.chromiak@gmail.com
// //Wayfair coding challenge 7-12-19
// function solution(S) {
//   let fileSize = {
//     music: 0,
//     images: 0,
//     movies: 0,
//     other: 0
//   }
//
//   let files = S.split('\n')
//
//   files.forEach(file =>{
//     if (file.includes('.mp3') || file.includes('.flac')){
//       let size = file.split(' ')[1]
//       fileSize.music += parseInt(size.split('b')[0])
//     }
//     else if (file.includes('.mkv') || file.includes('.mp4')){
//       let size = file.split(' ')[1]
//       fileSize.movies += parseInt(size.split('b')[0])
//     }
//     else if (file.includes('.img') || file.includes('.jpg')){
//       let size = file.split(' ')[1]
//       fileSize.images += parseInt(size.split('b')[0])
//     }
//     else{
//       let size = file.split(' ')[1]
//       fileSize.other += parseInt(size.split('b')[0])
//     }
//   })
//   return formatReturn(fileSize)
//   // console.log(fileSize);
// }
//
// function formatReturn(files){
//   Object.keys(files).forEach(function(key) {
//     console.log(key, files[key] + 'b');
//   });
// }

// solution( 'my.song.mp3 11b\ngreatSong.flac 1000b\nnot3.txt 5b\nvideo.mp4 200b\ngame.exe 100b\nmov!e.mkv 10000b' )


const rover = {
  direction: "N",
  x: 0,
  y: 0
}

function turnLeft(rover) {
  console.log("turnLeft() was called!")
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
};

function turnRight(rover) {
  console.log('turnRight() was called');
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
      console.log("turnRight was called!")
  }
}

  function moveForward(rover) {
    console.log('moveForward() was called');
    switch (rover.direction) {
      case "N":
        rover.y += 1;
        break;
      case "S":
        rover.y -= 1;
        break;
      case "E":
        rover.x += 1;
        break;
      case "W":
        rover.x-= 1;
    };
    console.log(rover.position)
  };

  function roverCommand(command) {
    for (i = 0; i < command.length; i++) {
      switch (command[i].toUpperCase()) {
        case "L":
          turnLeft(rover);
          break;
        case "R":
          turnRight(rover);
          break;
        case "F":
          moveForward(rover);
          break;
      }
    }
    console.log(rover);
  };

  roverCommand("FLF")
