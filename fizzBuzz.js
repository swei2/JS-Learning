var list = [];
var count = 1;

function fizzBuzz(){
    if (count % 3 ===0 && count % 5===0){
        list.push("fizzbuzz")//once find the match will ignore rest of the statements
    }
    else if (count % 3 === 0){
        list.push("fizz");
    }
    else if (count % 5 === 0){
        list.push("Buzz");
    }
    else{
        list.push(count);
    }
count +=1;
console.log(list);
}