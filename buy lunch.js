function whosPaying(names) {
        var numberOfPeople = names.length;
        var randomPersonPosition = Math.floor(Math.random()*numberOfPeople);
        var randomPerson = names[randomPersonPosition];
        return randomPerson + " is going to buy lunch";
    }

var list = ["a","b","c","d","Coffee","Latte"];
var test = whosPaying(list);
console.log(test);