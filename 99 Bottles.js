var TotalBottle = 99;
while (TotalBottle >=0){
    var deductBottle = TotalBottle-1
    console.log("this is my code");
    if (deductBottle >=0){
    console.log(TotalBottle + " bottles of beer on the wall," + TotalBottle + " bottles of beer. Take 1 down, pass it around,"+ deductBottle +" bottles of beer on the wall.");
    }
    TotalBottle -- ;
}
console.log("There is no bottle of beer on the wall");