 // Write a function that takes in a string and returns it when reversed
//  let food = “eating”
function takeString(food){
    let x = food.split('').reverse().join('');
    return x
}
let food = "eating";
console.log(takeString(food));
// Write a function that takes in the following array and consoles the target if it is found else
// null
// let num = [2,8,0,23,5,45,76]
// target = 23
function sort(num){
    if(num.length <= 1){
        return num
    }
    let middle = Math.floor(num.length /2);
    let left = num.slice(0,middle);
    let right = num.slice(middle);
    return mergeSort(sort(left),sort(right))
}
function mergeSort(left,right){
    let empty = [];
    while(right.length && left.length){
        if(left[0] < right[0]){
            empty.push(left.shift())
        }else{
            empty.push(right.shift())
        }
    }
    return[...empty,...left,...right]
}
let num = [2,8,0,23,5,45,76];
console.log(sort(num));

function binary(arr,target){
    let leftindex = 0;
    let rightindex = arr.length-1;
    while(leftindex <= rightindex){
        let middle = Math.floor(leftindex + rightindex / 2)
        if(arr[middle]===target){
            return target
        }else if(arr[middle] > target){
            right = middle-1
        }
        else{
            return null
        }
    }
}
let arr = [0,2,5,8,23,45,76];
let target = 23
console.log(binary(arr,target))
// Given years between 2000 and 2023, console all the leap years in the following
// sentence, i.e “2020 is a leap year” if not console log i.e “2001 is not a leap year”
for(let i = 2000; i <=2023; i++){
    if(i % 4 === 0){
        console.log(i + "is a leap year");
    }else{
        console.log(i + "is not a leap year")
    }
}

// / Given a range of numbers from 0 to 100, console”Fizz” if the numbers are divisible by 3,
//  “Buzz” if the numbers are divisible by 5, and “FizzBuzz” if divisible by both 3 and 5.
// for (let numbers = 0; numbers <=100; numbers++){
//     if (numbers%3==0 && numbers%5==0){
//         console.log("FizzBuzz");
//     }
//     else if (numbers%3==0){
//         console.log("Buzz")
//     }
//     else if(numbers%5===0){
//         console.log("Fuzz")
//     }
//     else{
//         console.log(numbers)
//     }
        
//     }
for (let i =0; i<=100;i++){
    if(i%3===0 && i%5===0){
        console.log("FizzBuzz");

    }else if(i%3===0){
        console.log("Fizz");
    }else if(i%5===0){
        console.log("Buzz");
    }else {
        console.log(i)
    }

}
// Write a function that takes in an array of numbers and returns an array that has all
// // elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]
numArray.forEach(element =>{
     if (element*4){
        emptyarray=[]
        console.log(element*4)
        emptyarray.push(element*4)
     }
})
console.log(emptyarray)

// function multiply(numArr){
//     let newEmpty=[];

//     for(let i=0; i<numArr.length;i++){
//         newEmpty.push(numArr[i*4])

//     }
//     return newEmpty;
// }
// let numArr = [12,87,45,23,64,73]
// let result = multiply(numArr)
// console.log(result);

//  Write a function that takes in an array of strings and returns an array with every element
// turned into a number
// let nums = [“10”,”24”,”45”,”56”,”67”]
function stringToNumberArray(arr) {
    return arr.map(str => Number(str));
  }
  
  let nums = ["10", "24", "45", "56", "67"];
  let result = stringToNumberArray(nums);
  console.log(result); 

  // Write a function that takes a string as an argument 
// and returns true if the string is a palindrome 
// (reads the same backwards and forwards) and false if it is not.
function pali(str){
  return str===str.split('').reverse().join('')

}

console.log(pali("civic"))
console.log(pali("school"))