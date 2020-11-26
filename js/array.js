// declare a variable
let fruit = [`Banana`, `Apple`, `Melon`];
console.log(fruit);
console.log(fruit[0]);
console.log(fruit[2]);
console.log(fruit[fruit.length-1]);
//FOR loop
for(let i =0; i<3; i++){
    let message = `${i+1}, ${fruit[i]}`;
    console.log(message);
}

//foreach loop
fruit.forEach(element =>{
    console.log("hello from foreach", element);
});

//decision ramdom element
let rnd =Math.floor(Math.random()* fruit.length);
console.log(rnd);
let randomfruit = fruit[rnd];
console.log("my random fruit;", randomfruit);

//delete element banana
let bananaIndex = fruit.indexOf('banana');
console.log('index of banana: ', bananaIndex);
fruit.splice(bananaIndex, 1);
console.log(fruit);