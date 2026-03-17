function reverseNumber(num){
    
    let revNum = "";

    while(num > 0){
        let rem = num%10;
        revNum = revNum+rem;
        num = Math.floor(num/10);
    }

    return parseInt(revNum);
}

let res = reverseNumber(12345)
console.log(res);