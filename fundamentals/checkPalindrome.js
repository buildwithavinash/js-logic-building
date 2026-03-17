function checkPalindrome(num){

    let ogNum = num
    let revNum = "";

    while(num > 0){
        let rem = num%10;
        revNum = revNum+rem;
        num = Math.floor(num/10)
    }

    let rev = parseInt(revNum)
    if(ogNum === rev){
        return true;
    }else{
        return false;
    }
}


let res = checkPalindrome(234);
console.log(res);