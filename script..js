//scope var is like common space,
var lang = "English";
function learn(topic){
    lang = topic; //here is accessed the global variable lang, this pblm will be solved if we introduce this lang as a new variable like var lang = topic;
   // console.log(`I'm learning ${lang}`);
}
learn("Javascript");
//console.log(`I know ${lang}`);

//let variable
if(true){
    let a = 5;
    //let a = 7; a is already decleared so we can't do that again
    a = 9;//but can reassign that variable
   // console.log(a);
}
//console.log(a);// let is blocked scoped its not accessable  from outside of a block

//const same as let but we can't reassign a value 
//in const we can muted a value from object example
const a = {//if it were a array, then you could pushed a value
    b: 2,
    d: 9
}
a.b = 10;
//console.log(a);

/*--------------------------------------------*/

//----function----

//regular function
function hello(){
    console.log('Hello there!');
    // from here it returns undefined
}
//let msg = hello();
//console.log(msg); // that is return something from the function

// function expression
const hellO = function(){
    console.log("Hello world!");
    // here return a value of undefined
}
//console.log(hellO());

// named function expression format
const hola = function hola(){
    console.log("holeda");
}

//arrow function
const arro = (a,b) => a * b;
//console.log(arro())

//anonymous function
const anony = () => {
    return () => {
        console.log("Anonoy function!");
    }
}
//console.log(anony()());

/*----------------------------------------*/

//-----event-handler------
let count = 0;
const increment = (a) => {
    count++;
    document.getElementById("add").innerText = count;
}
const decrement = () => {
    count--;
    document.getElementById("add").innerText = count;
}
 
// using just js
const btn = document.getElementById("js");
btn.addEventListener("click", () => {
    alert("alert using just js!");
})

// using mouseover and mouseout
const take = document.getElementById("mouse");
take.addEventListener("mouseover", () => {
    take.style.background = "red";
})
take.addEventListener("mouseout", () => {
    take.style.background = "gray";
})

//take data from form
const data = document.getElementById("form");
data.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name");
    alert(`Hello ${name.value}`);
})
/* we slso can do this when taking text input
<input type="text" />
<script>
  const inputs = document.getElementsByTagName("input");
  inputs[0].addEventListener("input", () => {
    console.log("Using tag name:", inputs[0].value);
  });
</script>
*/

/*--------------------------------*/

// primitive vs reference
// primitive---- string, number, null, undefined, symbols & bool
// reference----- object, array, functions, collections

let x = 5;
let y = 9;
x = y; //here we directly change the value (primitive)
y = 0;
console.log(x, y);

let p = ['js', 'python'];
let q = ["html", "css"];
q = p;
//console.log(p);
//console.log(q);
p.push("Go");
//console.log(q);



/*--------------------------*/

//----------array-----
/*
- push()- add element last
- pop()- remove last element
- unshift()- add element at first
- shift()- remove first element
- splice()- removes items starting from index
*/

let fruits = ['apple', 'banana', 'mango', 'orange', 'pineapple', 'banana'];
//fruits.splice(0,2);// .splice(1,2,7); means remove 2 items from starting index 1 and add 7 here
console.log(fruits);

//find() returns the value that satisfy testing function
const findResult = fruits.find((f) => f === "orange" || f === "mango");//its just return first find element || return just one value
console.log(findResult);

const fIndex = fruits.findIndex((f) => f === "orange");// its just give the index of fruit
console.log(fIndex);

const filFruits = fruits.filter((f) => f === "orange" || f === "mango");// that return multiple value if satisfy the condition as array
console.log(filFruits);

const sliceFruits = fruits.slice(1,3);// returns a shallow copy of a portion of an array
console.log(sliceFruits);

const concatFruits = fruits.concat(["unga", "banga"]);// used to merge two or more arrays but not effect on main array
console.log(concatFruits);

const mapFruits = fruits.map((f) => { // that by default return array
    if(f === 'banana'){
        return "banana";
    }else {
        return "N/A";
    }
}); 
console.log(mapFruits);// for practice do the same thing using for loop


const numbers = [1,2,3,4,5];
const addition = numbers.reduce((total, currentValue) => total+currentValue ,0);
console.log(addition);


for(num of numbers){ // show every value | for iterate
    console.log(num);
}
const language = {
    name: "Rupon",
    age: 18,
    class: 14
}
for(key in language){// this is just show the index
    console.log(language[key]);
}




/*-------------------------------------*/

//----- objects------
const c = "popular";
const info = {
    name: "Mia",
    school: "NDCM",
    passYear: 2023,
    age: 20, // here if key and values name are same like roi so just write roi
}
info[c] = "-100%"; //tricks to set a key name 
console.log(Object.values(info)); // directly get keys or values
console.log(Object.entries(info)); // it create key, value pair array
console.log(info);


/*--------------------------------------*/

//------ spread and rest operator------  just first layer spread or copied 2nd layer reference type carry (need destructure again)
const human = {
    name: "alex",
    age: 28,
    area: "Dhaka",
    campus: "Tejgoan",
    batch: 67,
}
//........
function sum(text , ...rest){ // it transform normal number to an array
    return rest.reduce((sum, c) => sum + c ,0);
}
console.log(sum("The sum is: " ,3, 9, 8));


/*--------------------------------------*/

//------truthy&falsy value-----

//falsy value - false, 0, undefined, null, '', NaN
// truthy- rest of the things are truth
// those are important when conditional statement




//-----------------------------------------
// ternary operator (not to use everywhere)
let t = 8;
console.log((t % 2) === 0 ? "Even" : "Odd"); // it can be nested


/*----------------------------------------*/
//------ destructring----
const user = {
    id: 102,
    name: "rupon",
    age: 20,
    education: {
        degree: "HSC",
        college: {
            name: "NDCM"
        }
    }
}
// const name = user.name;
const {education: {college: name} = {}} = user;
console.log(name);
// optional chaining when want to manually like: suer?.education?.college?.name



/*----------------------------------------*/
// nullish coalescing & short circuit condition
// nullish = null / undefined (??)
let nama = "python";
console.log(nama ?? "javascript"); // if nama is null or undefined then it will return left side value otherwise right side value

// || & ?? are not same (?? only for nullish value)
console.log(name || "Coma"); // nama can be any falsy value then return right value

console.log(nama && "Khama"); // if lang is truthy value then return right value



/*------------------asynchronous javascript-------------------*/
async function getData(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
}
getData();
// immedietly invoked function
// function promise return korlei await korte hbe


/*********
- practice this first try extra
- 2 times revision those topic
- Rabbil hasan rupon video (everything out of video)
- POSTMAN
- localstorage + project
- react a to z
- firebase
- LWS (redux toolkit)
- Node + Express + Mongodb
- framer motion
********/