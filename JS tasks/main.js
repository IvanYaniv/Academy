function sortingAsc(a, b) { 
  return a-b 
} 

function sortingDes(a, b) { 
  return b-a 
} 

function sortingByLengthAsc(a, b) { 
  return a.length-b.length 
} 

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

function jazzify(a) {
  let reg = /^[A-G]m?$/g;
  let regJazz = /^[A-G]m?7{1}$/g;
  let z = [];
  for (let i of a){
      if (i.match(reg)){
          z.push(i+="7");
      }else if (i.match(regJazz)){
          z.push(i);
      }
}
return z;
}

function jazzify2(a) {
  let z = [];
  let reg = /^[A-G]m?$/g;
  for (let i of a) {
      if(i.endsWith("7")){
          z.push(i);
      } else if (i = i.match(reg)){
          z.push(i+="7");
      }
  }
  return z;
}

console.log(jazzify(["G", "F", "C"]))
console.log(jazzify(["F7", "E", "A7", "Ab", "Gm", "C7"]))

/*Third Qustion*/
let third = "Third Question"
console.log(third) 

const firstValue = [1, 2, 3];
const secondValue = [1, 2, 5, 4, 8, 5, 9, 7, 2, 3];
const thirdValue = [7, 3, 0, 6, 5];

firstValue.sort(sortingDes);
secondValue.sort(sortingDes);
thirdValue.sort(sortingDes);

console.log(firstValue, secondValue, thirdValue)

/*fourth Qustion*/
let fourth = "Fourth Question"
console.log(fourth) 

let firstSortArr = ["Google", "Apple", "Microsoft"];

firstSortArr.sort(sortingByLengthAsc);

let secondSortArr = ["Leonardo", "Michelangelo", "Raphael", "Donatello"];

secondSortArr.sort(sortingByLengthAsc);

let thirdSortArr = ["Turing", "Einstein", "Jung"];

thirdSortArr.sort(sortingByLengthAsc);


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

function largestOfFour(arr) {
  let largestNumber = [-100,-100,-100];
  for(let arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
   for(let subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
      if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
         largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
       }
   }
}
return largestNumber;
}

console.log(largestOfFour([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]));
console.log(largestOfFour([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));


/*Seventh Question*/
let seventh = "Seventh Question"
console.log(seventh) 


class Calculator {
  constructor(num1, num2) {
      this.num1 = num1;
      this.num2 = num2;
  }
  get add() {
      return this.num1 + this.num2;
  }
  get multiply() {
      return this.num1 * this.num2;
  }
  get divide() {
      return this.num1 / this.num2;
  }
  get subtract() {
      return this.num1 - this.num2;
  }
}

const calc = new Calculator(10, 5)

console.log(calc.add)
console.log(calc.multiply)
console.log(calc.divide)
console.log(calc.subtract)



/*Eighth Question*/
let eighth = "Eighth Question"
console.log(eighth)

function keysAndValues(data){ 
  const keys = Object.keys(data), values = []; 
  keys.sort(); 
   
  for (i = 0; i < keys.length; i++) { 
    values[i]= data[keys[i]]; 
  } 
 
  return [keys, values];  
}


console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
console.log(keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(keysAndValues({ key1: true, key2: false, key3: undefined }));


/*Ninth Question*/
let ninth = "Ninth Question"
console.log(ninth)


function ascDesNone(adn, method) {
    if(method === "Asc") {
      let adnCopy = adn.sort();
      return adnCopy;
  } else if (method === "Des") {
      let adnCopy = adn.sort().reverse();
      return adnCopy;
  } else if (method === "None") {
      return adn;
  }
}

console.log(ascDesNone([4, 3, 2, 1], "Asc"))
console.log(ascDesNone([4, 3, 2, 1], "Des"))
console.log(ascDesNone([4, 3, 2, 1], "None"))





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

function getValue(matrix) {
  let sum = 0;

  for (let i = 0, l = matrix.length; i < l; i++)
      sum += matrix[i][i];

  return sum;
}

console.log(getValue([
  [1, 0, 1, 0],
  [0, 2, 0, 2],
  [3, 0, 3, 0],
  [0, 4, 0, 4]
]
));

console.log(getValue([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
])
);

console.log(getValue([
  [1, 4],
  [4, 1]
])
);





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


function celToKelAndFah(cel) {
  let kelvin = cel + 273.15;
  let fahrenheit  = cel * 9/5 + 32;
  return [fahrenheit, kelvin];
}

console.log(celToKelAndFah(0))
console.log(celToKelAndFah(100))
console.log(celToKelAndFah(-10))
console.log(celToKelAndFah(300.4))



/*Seventeenth Question*/
let seventeenth = "Seventeenth Question"
console.log(seventeenth)

function fearNotLetter(str) {
  let i, j = 0, m = 122;
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


