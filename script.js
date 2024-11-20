// console.log("hello testing...");
// function add(a = 44, b = 7){
//     return c = a + b;
// }

// let sum = add();

// console.log(`Sum is ${sum}`);

// function pow(num, power){
//     for(let i=1; i<power; i++){
//         result = result*num;
//     }
//     return result;
// }   //function declaration

// let num = prompt("enter number: ");
// let power = prompt("enter power: ");
// let result = num;

// console.log(pow(num, power));


// test = function(num1, num2){
//     console.log("num1: " + num1 + " num2: " + num2)
// };

// test(3, 5); //function expression

// let str = "yuVI";
// console.log(lower(str));
// console.log(last(str));
// function lower(str){
//     return str = str[0].toUpperCase() + str.slice(1).toLowerCase();
// }


// function last(str){
//     return str = "Last letter: " + str.slice(-1)
// }

let num = prompt("Enter number: ")
console.log("Number entered: " + num)
fizzbuzz(num);
function fizzbuzz(num){
    for(let i=1; i<=num; i++){
        if(i%3 === 0){
            console.log("fizz")
        }
        else if(i%5 === 0){
            console.log("buzz")
        }
        else if(i%3 === 0 || i%5 === 0){
            console.log("fizzbuzz")
        }
        else{
            console.log(i)
        };
    }
}