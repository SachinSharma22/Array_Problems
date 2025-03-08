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