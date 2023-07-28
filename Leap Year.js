function isLeap(year){
    if (year % 4 === 0 || year % 400 === 0 || year % 100 !== 0){
        return "Leap Year!"
    }
    else{
        return "Not a Leap Year!"
    }
}  

var test = isLeap(2004);
console.log(test);