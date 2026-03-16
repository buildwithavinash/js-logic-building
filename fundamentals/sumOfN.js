function sumOfN(num){
    let sum = 0;

    for(let i = 1; i<=num; i++){
        sum = sum + i;
    }

    return sum
}

let result = sumOfN(15)
console.log(result);