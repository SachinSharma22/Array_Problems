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