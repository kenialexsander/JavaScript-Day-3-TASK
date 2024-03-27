
/*  1. How to Compare two JSON have the same properties without order?

    // a. lot obj1 = { name: "Person 1", age:5};
    // b. lot obj2 = { age:5, name: "Person 1"};
    let obj1 = { name: "Person 1", age:5};
    let obj2 = { age:5, name: "Person 1"};
*/


let obj1 = { name: "Person 1", age:5};
    let obj2 = { age:5, name: "Person 1"};

function areEqual(obj1, obj2) {
    // Convert objects to JSON strings
    let json1 = JSON.stringify(obj1, Object.keys(obj1).sort());
    let json2 = JSON.stringify(obj2, Object.keys(obj2).sort());

    // Compare the JSON strings
    return json1 === json2;
}
console.log(areEqual(obj1, obj2)); // Output: true

// API rest countries
console.log("Display all the Country flags, Countries Names, Regions, sub-region and Populations in the console")
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
const data = JSON.parse(xhr.response);
for (let i = 0; i < data.length; i++){
 console.log(data[i].flags.png);
 console.log(data[i].name.common);
 console.log(data[i].region);
 console.log(data[i].subregion);
 console.log(data[i].population);

}
};
    

