// // var is function scoped and let, const are blocked scoped
// let lang = "English";
// function learn(hola){
//     lang = hola;
//     console.log(`Language is: ${lang}`);
//     if(true){
//         var lang1 = "bangla";
//         // var lang1 = "Marathi"; // redeclaration possible with var,  for let we can re-assign 
//         let lang3 = 99;
//     }
//     console.log(lang1)
//     // console.log(lang3); this is not accessable because let is blocked scoped
// }
// learn("Hindi");
 

 


// // function
// // if a function has no return, it returns a undefined by default (its a default behavior)
// function hello(){
//     console.log("hello there!");
// }
// console.log(hello());

// // named function
// const named = function hola(){
//     console.log("Named function here!!");
// }
// console.log(named())

// // anonymous function
// const annoy = () => {
//     return () => {
//         console.log("Anony function here!!");
//     }
// }
// console.log(annoy()());

// // arrow function
// const arrow = (a, b) => console.log(a+b); 
// arrow(3, 4);








// // event-handler
// let count = 0;
// let box = document.getElementById("number");

// const increment = () => {
//     count++;
//     box.innerText = count;
// }

// const decrement = () => {
//     if(count >= 1){
//         count--;
//         box.innerText = count;
//     }else {
//         console.log("no more decrement please!!!");
//     }
// }

// // load web page
// window.addEventListener("load", () => {
//     console.log("Window Loaded!!");
// })
// // for resize
// window.addEventListener("resize", () => {
//     console.log("Window resize!!");
// })
// // for paste / copy
// window.addEventListener("copy", () => {
//     console.log("pasted something!!");
// })
// // for getting by id or tag or classname use a comment ( document.querySelector )












// //Array
// // Modify the orginal array (push, pop, unshift, shift, splice, short, reverse)
// const fruits = ["mango", "apple", "banana", "pineapple"];
// fruits.push("olive");
// fruits.unshift("first");
// console.log(fruits);
// fruits.pop();
// fruits.shift();
// console.log(fruits);
// fruits.splice(1,1); //can add here like (1,1,5)
// console.log(fruits);

// // short(in string it work with first letter of word - ascending or descending)
// const numbers = [2,1,5,4,6,8];
// numbers.sort();
// console.log(numbers);
// numbers.sort((a,b) => b-a);
// console.log(numbers);
// numbers.reverse();
// console.log(numbers);

// const users = [
//   { name: 'Rupon', age: 22 },
//   { name: 'Mia', age: 20 },
//   { name: 'Fardin', age: 24 }
// ];
// users.sort((a,b) => a.age - b.age);
// console.log(users);

// in JS array size are dynamically managed through length
// but we can create an array using constructor like: let numbers = new Array(5)


// // creates a new array but did not modified main array
// const number = [2,3,4,7,9,7,5];
// const num = [7,8,9];
// console.log(number.concat(num));

// const slice = number.slice(1,2, 7);
// console.log(slice)

// console.log(number.indexOf(7,4)); // if 2 value are same by default it show index of 1st element we need to give the first value index or more if we want to take second value index
// console.log(number.lastIndexOf(7));

// console.log(number.includes(5)); // return true or false if includes

// const name = ['r', 'up', 'on'];
// console.log(name.join("")); // for just () it show ',' using comma, if no need to comma then use just (" ")

// const nam = [1,2,3];
// console.log(nam.toString()); // just transform array to string form

// console.log([[1,2], [7,8]].toString());

// // toLocalString --- it is used when set a time in webpage with different formet
// const price_time = [new Date()];
// console.log(price_time.toLocaleString("de-DE"));
// console.log(price_time.toLocaleString("en-US"));

// // reverse a string
// const name = "rupon";
// const reverse = name.split('').reverse().join("");
// console.log(reverse);

// // remove duplicates
// const num = [1,2,33,33,45,7,5,4,5];
// const remove_duplicates = [...new Set(num)];
// console.log(remove_duplicates);




// // for..of, for...in in JavaScript
// const fruits = ["apple", "banana", "mango"];
// for(let f in fruits){
//     if(f == 1){
//         console.log(f, fruits[f]);
//     }
// }








// // primitive + reference
// let x = 2;
// let y = 5;
// x = y;
// y = 1; // we directly changed the value here
// console.log(x, y);

// let num = [2,3,4];
// let num1 = [5,6];
// num1 = num;
// console.log(num);
// num1.push(90);
// console.log(num1);


// let date =  new Date();
// console.log(date.getTime())
// console.log(Math.round(Math.random() * 6));
// const num = "10";
// console.log(Number.parseFloat(num))
 




// // reduce method (for adding all elements in the array)
// const numbers = [1,2,3,4,5,6,7,8,9,10];
// const add = numbers.reduce((ttl, currentValue) => ttl + currentValue,0);
// console.log(add);
// const cart = [
//   { product: 'Shirt', price: 1200 },
//   { product: 'Pant', price: 1800 },
//   { product: 'Shoes', price: 2000 }
// ];
// const total_price = cart.reduce((ttl, item) => ttl + item.price, 0);
// console.log(total_price);

// // find (it return the elements if matched the condition)
// const name = ["fardiya", "islam", "rupon", "mia"];
// const find = name.find((n) => n === "mia" || n === "islam");
// console.log(find);

// // findIndex is return the index where our element is located

// // filter return a new array with matched condition elements
// const fruits = ["banana", "mango", "apple", "pineapple", "apple"];
// const fillter_fruits = fruits.filter((f) => f === "apple");
// console.log(fillter_fruits);

// // Map (it return a new array with true or false base on condition)
// const map_array = fruits.map((f) => f === "pineapple");
// console.log(map_array);
// const price_list = [300,400,500,700,800];
// const discount_price = price_list.map(p => p * (1 - 10/100));
// console.log(discount_price)

// const students = [
//   { name: 'Rupon', marks: 85 },
//   { name: 'Mia', marks: 32 },
//   { name: 'Rahim', marks: 70 },
//   { name: 'Karim', marks: 28 }
// ];
// const pasedStudent = students.filter(student => student.marks > 80);
// console.log(pasedStudent);

// // forEach method (Go through every item in the array one by one, and do something with it.)
// const number = [1,2,3];
// number.forEach((num) => {
//     console.log(num);
// })
// number.forEach((num, index) => {
//     console.log(`${index} - ${num}`);
// })

// const emails = ['rupon@gmail.com', 'mia@yahoo.com', 'rahim@outlook.com'];
// emails.forEach(e => {
//     console.log(`Email send to ${e}`);
// })

// const students = [
//   { name: 'Rupon', marks: [80, 85, 90] },
//   { name: 'Mia', marks: [60, 75, 70] },
//   { name: 'Karim', marks: [50, 65, 55] }
// ];
// students.forEach(student => {
//     const total = student.marks[0] + student.marks[1] + student.marks[2];
//     console.log(`${student.name} got total ${total} marks.`);
// })





// // JS objects
// const popu = "popular";
// let i = 3;
// const info = {
//     name: "Mia",
//     school: "NDCM",
//     passYear: 2023,
//     age: 20, 
//     i
// }
// info[popu] = "10%";
// console.log(info);
// console.log(Object.values(info));

// const obj1 = {name: "Rupon"};
// const string = JSON.stringify(obj1);
// console.log(string);

// const sum = (name, ...rest) => {
//     return rest.reduce((ttl, c) => ttl + c, 0);
// }
// console.log(sum("rupon", 2,3,4));

// falsy value -> false, 0, undefined, null, '', NaN
// truthy value -> true, " ", number, [], {}, function, infinity 

// const user = {
//     id: 102,
//     name: "rupon",
//     age: 20,
//     education: {
//         degree: "HSC",
//         college: {
//             name: "NDCM",
//         }
//     }
// }
// const {id, age, education: { college: {name} = {} }} = user;
// console.log(id, "-", age,);
// console.log(name);
 


// // nullish coalescing
// const roll = 12;
// const nam = undefined;
// console.log(roll ?? "roll nai:"); // if roll is null or undefined then show right value
// console.log(nam || "mone hoi nai"); // return 2nd value if 1st value is falsy
// const nama = "Rupon";
// console.log(nama && "Khama");










// //-----------------------DOM Beau carnes------------------------
// const title = document.getElementById("title");
// title.append(" Ninja")

// document.querySelector("h1").innerText = "DOM";

// const boxId = document.querySelector("#box_id");
// boxId.style.backgroundColor = "red";
// boxId.style.padding = "20px";

// const listItem = document.querySelectorAll("a");
// console.log(listItem);

// listItem.forEach((i) => {
//     i.style.backgroundColor = "green";
     
// })


// const boxParent = document.querySelectorAll(".box");
// boxParent[0].innerText = "hello 1";
// let count = 0;
// for(box of boxParent){
//     box.innerText = `box number ${count+1}`;
//     count++;
// }



// // create element
// const buttonBox = document.querySelector(".hero");
// const button = document.createElement("button");
// button.innerText = "show more";
// buttonBox.append(button); // for add in last use append
// // buttonBox.prepend(button); // for add in first use append
// // buttonBox.before(button); // for add before box(hero)
// // buttonBox.after(button); // for add after box(hero)



// // // add element
// // const addEleemnt = (fruits) => {
// //     const li = document.createElement("li");
// //     li.innerHTML = `${fruits}`;
// //     document.querySelector(".list").appendChild(li);
// // }
// // addEleemnt("mango");
// // addEleemnt("apple");
// // addEleemnt("orange");

// const addItem = (fruits) => {
//     const li = document.createElement("li");
//     li.appendChild(document.createTextNode(fruits));
//     document.querySelector(".list").appendChild(li);
// }
// addItem("Mango");
// addItem("apple");
// addItem("orange");

// // Edit a child
// const itemEdit = document.querySelector('li:first-child');
// itemEdit.innerText = "Hi";
// console.log(itemEdit);

 



