const sumOddFirst = (oddLimitNumber) => {
    let sum = 0; 
    for(let i= 1; i <= oddLimitNumber; i +=2 ){
        sum += i;
    }
    return sum;
}

