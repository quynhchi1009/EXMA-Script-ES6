// Destructuring
var array = ["JS", "PHP", "Ruby"];
var a = array[0];
var b = array[1];
var c = array[2];
console.log(a, b, c);

var [a, , c] = array;
console.log(a, c);

var couse = {
    name: "JS",
    price: 1000, 
    image: "image-address", 
    children: {
        name: "React JS"
    }
}
var { name, price } = course;

// Rest parameters  -> lay phan con lai
var [a, ...rest] = array;
console.log(rest) //in ra PHP va Ruby

var { name: parentName,
    children: { name: childrenName },
    description= "default",
    ...nre } = course;
console.log(name); //React JS (name bi ghi de)
console.log(parentName); //JS
console.log(description)

function logger(...params) { 
}
console.log(logger(1,2,3,4,5,6)) //Array


function logger(a, b, ...params) {
    console.log(params);
}
logger(1, 2, 3, 4) //3,4

function logger({ name, price, ...rest }) {
    console.log(name);
    console.log(rest);
}
logger({
    name: "js",
    price: 1000,
    decription: "content"
})

function logger([a, b, ...rest]) {
    console.log(rest);
}
logger([1, 2, 3, 4, 6])
