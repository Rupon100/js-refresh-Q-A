// localstorage -- need to manually delete item
localStorage.setItem("user name", "Rupon Mia");
localStorage.setItem("pass", "1,2,3");
localStorage.setItem("user name", "fardiya"); // update

const item = localStorage.getItem("user name");
console.log(item);
localStorage.removeItem("user name");
// localStorage.clear(); for clear all data

// store array
const country = ["bangladesh", "nepal", "india", "bhutan"];
localStorage.setItem('countries', JSON.stringify(country)); // store as string
const coun = localStorage.getItem("countries"); 
console.log(JSON.parse(coun)); // parse give a actual array


// stored till tab is open
sessionStorage.setItem("name", "tanha");
// other functionality are same as LS

// cookie
document.cookie = "username=rupon; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";
console.log(document.cookie); 

/* project
https://chatgpt.com/c/687913e0-ebcc-8008-92b2-d352690310fc
https://chatgpt.com/c/687913e0-ebcc-8008-92b2-d352690310fc
*/

// dark/light > mini project + drag and drop
// react (YT + PH) + POSTMAN
// LWS(redux)