function add (numOne, numTwo) {
    if (numOne == undefined || numTwo == undefined) {
        return undefined;
    }
    else if (typeof(numOne) !== "number" || typeof(numTwo) !== "number") {
        return undefined;
    }
    
    return numOne + numTwo;

}

console.log(add(1,2));
console.log(add(true,1));

