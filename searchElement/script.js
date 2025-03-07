let arr = ['sachin', 'sharma', 'saurabh', 'pawan'];

function searchArray(arr, targetElement) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === targetElement){
            return i;
        }
    }
    return -1;
}
let studentName = 'pawan';
// let result = searchArray(arr, studentName);
// demo.textContent = `found the ${studentName} on the place ${result}`;

const grocery = ["egg", "flour","choose", "sugar", "milk"];


// O(n)
const searchForItem = (item) => {
    for(let i = 0; i< grocery.length; i++){
        if(grocery[i] ===item){
            demo.textContent = `found: ${item}`;
        }
    }
}

// searchForItem('sugar');

const numbers = [1,2,3,4,5];

const getElement = (arr, index) => arr[index];

// console.log(getElement(numbers, 2));


// O(n^2) time complexity
const number1 = [1,2,3,4,5];

function findPair(arr){
    for(let i = 0; i<arr.length; i++){
        for(let j=  i+1; j<arr.length; j++){
            console.log(`pair ${arr[i]}, ${arr[j]}`);
        }
    }
}

// findPair(number1);
