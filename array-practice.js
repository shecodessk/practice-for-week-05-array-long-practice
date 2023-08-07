const findMinimum = arr => {
  let min = arr[0];
  arr.filter( (el) =>{
    
    if(el < min){
      min = el;
    }
  })
return min
};
//Testing
//const arr = [7, 5, 2, 3, 4, 1]; 
//console.log( findMinimum(arr))

//Time complexity O(N): min has a constant 0(1) + array the goes N length through each slot in the array O(N). so 0(1) + 0(N) takes the dominating notation.
//Space complexity: O(1)
const runningSum = arr => {
  let sum = 0;
  return arr.map(el => sum += el)
};
//Testing
//const arr = [1,2,3,4]; 
//console.log( runningSum(arr)); // => [1,3,6,10]
//console.log(arr)

//Time Complexity O(N): this operation has sum as a constant O(1), and an array that is searches through N length slots to alter the elements with the previous sum and return that as a new el of a new array. O(1) + O(N) === O(N)
//Space Complexity: O(N)
const evenNumOfChars = arr => {
  let count = 0;
  arr.filter( (string) => { 
    if(string.length % 2 === 0){
      count++
    }
  })
  return count;
};

//Testing:
//const arr = ['ab', 'abc', 'a', 'abcd']; 
//console.log(evenNumOfChars(arr)); // => 2
//Time Complexity O(1) + O(N) + O(1) === O(N) Because we are searching through the entire array, to find and filter all the elements with an even length of characters.
//Space Complexity: O(1)
const smallerThanCurr = arr => {
  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    let constant = arr[i];
    let count = 0;

    arr.forEach( (el) =>{
      if(constant > el){
        count++
      }
  })
    newArr.push(count)
}
  return newArr;
};

//Testing:
//const arr = [8,1,2,2,3];
//console.log(smallerThanCurr(arr)); // => [4,0,1,1,3]
//Time Complexity O(1) + O(N) * O(N) + O(N): Here we have a nested iterations where we will search through each element in the array and comparing it to each remaining element to see if it's bigger/smaller, finally we are adding elements into a new array by inserting with push O(1).
//Space Complexity: O(N)
const twoSum = (arr, target) => {
  let sum = 0;
 
  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j< arr.length; j++){
      sum = arr[i] + arr[j];

      if (sum === target && (arr.indexOf(arr[i]) !== arr.indexOf(arr[j]))){
        return true;
      } 
    }
  }

  return false
 }

//Testing
//const arr = [4, 2, 3, 6, 9]; 
//console.log(twoSum(arr, 10)); // => True

//const arr2 = [4, 2, 3, 6, 9];
//console.log(twoSum(arr2, 16)); // => False
//Time Complexity: This is a nested loop O(N^2). It also contains  O(1) constant variable for the sum but we only take the dominant one.
// Space complexity: O(1)


const secondLargest = arr => {
 let largest = arr[0];
  let idx = 0;

  for (let i = 1; i < arr.length; i++) {
    let el = arr[i];

    if (el > largest) {
      largest = el;
      idx = i;
    }
  }

  let arrWithoutLargest = [...arr.slice(0, idx), ...arr.slice(idx + 1)]

  let second = arrWithoutLargest[0];

  for (let j = 1; j < arrWithoutLargest.length; j++) {
    let el = arr[j];

    if (el > second) {
      second = el;
    }
  }

  return second;
}

// Time complexity: O(n)
// Space complexity: O(n)

const shuffle = (arr) => {

  let newArr = [];

  for(let i = 0; i < arr.length; i++){
    let index = Math.floor(Math.random() * (arr.length))
    
    while(newArr[i] === undefined){
      let randomEl = arr[index];

       if(!newArr.includes(randomEl)){
          newArr[i] = randomEl;
        }

   index = Math.floor(Math.random() * (arr.length))
    }
  }
  return newArr;
  
};
//Testing:
//const arr = [2, 5, 1, 3, 4, 7];
//console.log(shuffle(arr)); // => [2, 3, 5, 4, 1, 7]

// Time complexity: O(n ^ 2)
// Space complexity: O(n)
module.exports = [findMinimum, runningSum, evenNumOfChars, smallerThanCurr, twoSum, secondLargest, shuffle];