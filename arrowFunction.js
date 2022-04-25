//Arrow function
function logger(log){
    console.log(log);
}

logger("Message...");

const logger = log => console.log(log);

const sum = (a,b) => {
    // return a + b;
    return {
        a: a, 
        b: b
    }
}

const sum2 = (a, b) => ({ a: a, b: b })
console.log(sum(2, 3));

const course = {
    name: "Java Script basic",
    getName: function () { 
        return this; //context
    }
}
console.log(course.getName());


const courseContructor = function (name, price) { 
    this.name = name;
    this.price = price;
}
const js = new courseContructor("Java Script", 123);


