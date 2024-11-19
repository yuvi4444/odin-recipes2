console.log("hello testing...");
function add(a = 44, b = 7){
    return c = a + b;
}

let sum = add();

console.log(`Sum is ${sum}`);

function pow(num, power){
    for(let i=1; i<power; i++){
        result = result*num;
    }
    return result;
}

let num = prompt("enter number: ");
let power = prompt("enter power: ");
let result = num;

console.log(pow(num, power));