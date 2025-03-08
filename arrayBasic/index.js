const fruits = [];
fruits.push("banana","apple", "peach");
console.log(fruits.length);

fruits[5] = "mango";
console.log(fruits[5]);
console.log(Object.keys(fruits));
console.log(fruits.length);


fruits.length = 10;
console.log(fruits);
console.log(Object.keys(fruits));
console.log(fruits.length);
console.log(fruits[8]);

// Decreasing the length
fruits.length = 2;
console.log(Object.keys(fruits));
console.log(fruits.length);

// forEach()
const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) =>{
    console.log(`${index}: ${item}`);
});

console.log(colors.reverse());

// Newer methods keys
const iterator = colors.keys();
for (const key of iterator){
    console.log(`${key}: ${colors[key]}`);
}

console.log(colors);
const newColors = colors.toReversed();
console.log(newColors);

// multidimensional array

const random = ["tree", 333, [0,1,2]];
console.log(random[2][2]);

// Finding the index of item in an array

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl"));
console.log(birds.indexOf("Rabbit"));

// Adding items into array
const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities);
cities.push("Bradford","Brighton");
console.log(cities);

//Store the length of the array into a variable
const newLength = cities.push("Bristol");
console.log(cities);
console.log(newLength);

// To add an item to the start of the array, use unshift():

cities.unshift("Rasra");
console.log(cities);

// To remove the last item from the array, use pop().
cities.pop();
console.log(cities);

// To remove the first item from an array, use shift():

cities.shift();
console.log(cities);

// If you know the index of an item, you can remove it from the array using splice():

const index = cities.indexOf("Liverpool");
if(index != -1){
    cities.splice(index, 1);//1 indicate how many item you want to remove from the array with the help of splice
}
console.log(cities);

// Accessing every item

const birds1 = ["Parrot", "Falcon", "Owl"];

for(const bird of birds1){
    console.log(bird);
}

// map()
function double(number){
    return number * 2;
}

const numbers = [1,2,3,4];
const doubled = numbers.map(double);
console.log(doubled);

// filter()

function isLong(city){
    return city.length>8;
}

const longer = cities.filter(isLong);
console.log(longer);

// split()
const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";
const city = data.split(",");
console.log(city);
city.length;
city[0]; // the first item in the array
city[1]; // the second item in the array
city[cities.length - 1]; 

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString();
console.log(dogNames);
