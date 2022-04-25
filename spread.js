var array1 = ["JS", "PHP", "Ruby"];
var array2 = ["Java"];
var array = [...array2, ...array1]

var obj1 = {
    name: "JS"
}
var obj2 = {
    price: 1000
}
var obj = { ...obj1, ...obj2 }

var defaultConfig = {
    api: "https://domain-trang",
    apiVersion: 1.1, 
    other: "other"
}
var exerciseConfig = {
    ...defaultConfig, //receive all characters
    api: "https://domain-bai-tap" //override character
}
console.log(exerciseConfig);

var array = ["PHP", "AI", "Chi"];
function logger(a, b, c) { 
    console.log(a,b,c);
}
function logger(...rest) {
    for (let index = 0; index < rest.length; index++) {
        const element = rest[index];
        console.log(element);
    }
}
logger(...array)