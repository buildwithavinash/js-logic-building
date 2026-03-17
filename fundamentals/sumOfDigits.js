// extract digits
// sum it

function sumOfDigits(num){

    let sum = 0;
    while(num > 0){
        let rem = num%10;
        sum = sum + rem;
        num = Math.floor(num/10)
    }

    return sum
}

let res = sumOfDigits(0);
console.log(res);