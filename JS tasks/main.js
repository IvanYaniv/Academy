/*First Qustion*/
let first = "First Question"
console.log(first)

function countTrue(arr) {
	return arr.filter(w => w === true).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));

/*Second Question*/
let second = "Second Question"
console.log(second) 

var jazz = ["G", "F", "C"];
var secondJazz = ["Dm", "G", "E", "A"];
var thirdJazz = ["F7", "E7", "A7", "Ab7", "Gm7", "C7"];
var fourthJazz = [];
jazz = jazz.map(function(el) { return el + '7'; });
secondJazz = secondJazz.map(function(el) { return el + '7'; });
fourthJazz = fourthJazz.map(function(el) { return el + '7'; });

console.log(jazz, secondJazz, thirdJazz, fourthJazz)

/*Third Qustion*/
let third = "Third Question"
console.log(third) 

const firstValue = [1, 2, 3];
const secondValue = [1, 2, 5, 4, 8, 5, 9, 7, 2, 3];
const thirdValue = [7, 3, 0, 6, 5];

firstValue.sort(function(a, b){return b-a});
secondValue.sort(function(a, b){return b-a});
thirdValue.sort(function(a, b){return b-a});

console.log(firstValue, secondValue, thirdValue)

/*fourth Qustion*/
let fourth = "Fourth Question"
console.log(fourth) 

var firstSortArr = ["Google", "Apple", "Microsoft"];

firstSortArr.sort(function(a, b) {
    return a.length - b.length
});

var secondSortArr = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];

secondSortArr.sort(function(a, b) {
    return a.length - b.length
});

var thirdSortArr = ["Turing", "Einstein", "Jung"];

thirdSortArr.sort(function(a, b) {
    return a.length - b.length
});


console.log(firstSortArr, secondSortArr, thirdSortArr);

/*fifth Qustion*/
let fifth = "Fifth Question"
console.log(fifth) 

function minMax(arr){
    
    let minimum = Math.min(...arr);

    let maximum = Math.max(...arr);
    
   let result =  ([minimum, maximum]); 
    return result;
  };
  
  console.log(minMax([1, 2, 3, 4, 5]));
  console.log(minMax([2334454, 5]));
  console.log(minMax([1, 1]));

/*Sixth Question*/
let sixth = "Sixth Question"
console.log(sixth) 

var firstMassive = [[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]];
var firstLargest = firstMassive.map(function(item){
  return Math.max.apply(null,item)
});

var secondMassive = [[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]];
var secondLargest = secondMassive.map(function(item){
  return Math.max.apply(null,item)
});

var thirdMassive = [[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]];
var thirdLargest = thirdMassive.map(function(item){
  return Math.max.apply(null,item)
});

console.log(firstLargest, secondLargest, thirdLargest);


/*Seventh Question*/
let seventh = "Seventh Question"
console.log(seventh) 


function calculator(num1, num2, mark) {
    switch (mark) {
      case "*":
        return num1 * num2;
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "/":
        if (num2 !== 0) {
          return num1 / num2;
        } else {
          return "не ділиться";
        }
    }
  }

console.log(calculator(10, 5, "+"))
console.log(calculator(10, 5, "-"))
console.log(calculator(10, 5, "*"))
console.log(calculator(10, 5, "/"))

/*Eighth Question*/
let eighth = "Eighth Question"
console.log(eighth)

function keysAndValues(data){
  var keys = Object.keys(data),
      values = keys.map(function (key) {
          return data[key];
      });
  
  return [keys, values]; 
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


/*Ninth Question*/
let ninth = "Ninth Question"
console.log(ninth)

const ascDec = [1,2,3,4,5,6,7,8,9,10];

function none() {
  return ascDec
}

let ascDecCopy = ascDec;

function sIncrease(i, ii) { 
    if (i > ii)
        return 1;
    else if (i < ii)
        return -1;
    else
        return 0;
}
function sDecrease(i, ii) { 
    if (i > ii)
        return -1;
    else if (i < ii)
        return 1;
    else
        return 0;
}


console.log(ascDecCopy.sort(sIncrease))
console.log(ascDecCopy.sort(sDecrease))
console.log(ascDec.sort(none))



/*Tenth Question*/
let tenth = "Tenth Question"
console.log(tenth)

function sortIt(arr) {
  return arr.sort((a, b) => {
    let num1 = typeof a === "number" ? a : a[0];
    let num2 = typeof b === "number" ? b : b[0];
    return num1 - num2;
  });
}

console.log(sortIt([4, 1, 3]))
console.log(sortIt([[4], [1], [3]]))
console.log(sortIt([4, [1], 3]))
console.log(sortIt([[4], 1, [3]]))
console.log(sortIt([[3], 4, [2], [5], 1, 6]))


/*Eleventh Question*/
let eleventh = "Eleventh Question"
console.log(eleventh)

function hasHiddenFee(prices, status) {
  return (
    prices.map(num => Number(num.slice(1))).reduce((acc, curr) => acc + curr) <
    Number(status.slice(1))
  );
}

console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15"))
console.log(hasHiddenFee(["$1", "$2", "$3"], "$6"))
console.log(hasHiddenFee(["$1"], "$4"))



/*Twelfth Question*/
let twelfth = "Twelfth Question"
console.log(twelfth)

var MAX = 100;

function findTrace(mat, n)
{
    var sum = 0;
    for(var i = 0; i < n; i++)
        sum += mat[i][i];
         
    return sum;
}

var mat = [ [1, 0, 1, 0],
            [0, 2, 0, 2],
            [3, 0, 3, 0],
            [0, 4, 0, 4] ];

console.log(findTrace(mat, 4))



/*Thirteenth Question*/
let thirteenth = "Thirteenth Question"
console.log(thirteenth)

const str = "The quick_brown fox! %fd76$fd(-)6GvKlO. D0n$c sed 0di0 du1";
console.log(str.replace(/[^a-zA-Z0-9 _ -]/g, ""));


/*Fourteenth Question*/
let fourteenth = "Fourteenth Question"
console.log(fourteenth)

const regexp = /(?:(?:^|[-+_*/])(?:\s*-?\d+(\.\d+)?(?:[eE][+-]?\d+)?\s*))+$/;

function test(s) {
  console.log(regexp.test(s));
}

test("4 + 5");
test("4*6");
test("4*no");


/*Fifteenth Question*/
let fifteenth = "Fifteenth Question"
console.log(fifteenth)


function numDots(n)
{
    return (5 * n * n - 5 * n + 2) / 2;
}

console.log(numDots(1))
console.log(numDots(2))
console.log(numDots(3))
console.log(numDots(8))


/*Sixteenth Question*/
let sixteenth = "Sixteenth Question"
console.log(sixteenth)


function celsiusToFahrenheit ( C )
{
    return C*9/5 +32
}

function celsiusToKelvin  ( C )
{
    return C + 273.15
}

console.log(celsiusToFahrenheit(0))
console.log(celsiusToKelvin(0))



/*Seventeenth Question*/
let seventeenth = "Seventeenth Question"
console.log(seventeenth)

function fearNotLetter(str) {
  var i, j = 0, m = 122;
  if (str) {
      i = str.charCodeAt(0);
      while (i <= m && j < str.length) {
          if (String.fromCharCode(i) !== str.charAt(j)) {
              return String.fromCharCode(i);
          }
          i++; j++;
      }
  }
  return "No Missing Letter";
}

console.log(fearNotLetter('abdefg'));   
console.log(fearNotLetter('mnopqs'));    
console.log(fearNotLetter('tuvxyz'));   
console.log(fearNotLetter('ghijklmno'));         


