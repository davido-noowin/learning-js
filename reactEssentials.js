// arrow functions

const foo = () => {
    console.log("hello world");
}
foo();

// ternary operators
let age = 15;
let name = (age > 10) ? "Pedro" : "Jack";

// objects
const person = {
    name : "test",
    age : 10, 
};

// copy the object except make a change or add something new
const person2 = {...person, name: "David", sport: "vball"};

console.log(person, person2);