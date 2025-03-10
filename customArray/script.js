//Creating custom array

class MyArray{
    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item){
        this.data[this.length] = item;
        this.length++;
        return this.length;
        // console.log("--------",)
    }

    get(index){
        return this.data[index];
    }

    pop(){
        const lastItem = this.data[this.length-1];
       delete this.data[this.length-1];
       this.length--;
       return lastItem;
    }

    shift(){
        const firstItem = this.data[0];
        for(let i = 0; i < this.length; i++){
            this.data[i] = this.data[i+1];
        }

        delete this.data[this.length-1];
        this.length--;
        return firstItem;
    }
}

const myNewArray = new MyArray();
myNewArray.push("apple");
myNewArray.push("Banana");
myNewArray.push("Mango");
myNewArray.push("orange");

// myNewArray.pop();

// console.log(myNewArray.get(2));

console.log(myNewArray.shift())
console.log(myNewArray)


/*
const stringArr = ['a','b','c', 'd'];

const numberArr = [1,2,3,4,5];

const boolArr = [true, false];

const mixedArr = ['a', 1, true, undefined, null, {a:"a"}, ["b"], NaN];

console.log(mixedArr);
*/

