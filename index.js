// Code your solutions in this file
function printBadges(myArray){
 let num = myArray.length;
    for (i = 0; i < num; i++){
      console.log(myArray[i]);

    }
    for (j = 0; j < num; j++){
     console.log("Welcome Joe! You are employee #${j+1}.");
    }
}
