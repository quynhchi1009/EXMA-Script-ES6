// 1. định nghĩa key: value cho object
// 2. định nghĩa method cho object
// 3. định nghĩa key cho object dưới dạng biến

var name = "Java Script";
var price = 1000;
var couse = {
    name: name,
    price: price
}
console.log(course);

var couse = {
    name,
    price,
    getName: function () {
        return this.name;
    }
}

 // 1. định nghĩa key: value cho object
var couse = {
    name,
    price
}

// 2. định nghĩa method cho object
var couse = {
    name,
    price,
    getName() {
        return this.name;
    }
}
console.log(course.getName());

// 3. định nghĩa key cho object dưới dạng biến
var fieldName = "name";
var fieldPrice = "price";
const course = {
    [fieldName]: "JavaScript",
    [fieldPrice]: 1000
}