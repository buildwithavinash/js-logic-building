function pattern6(n){
    let str = "";
    for(let i =1; i<=n; i++){
        for(let j = 1; j<=n-i+1; j++){
            str+= `${j} `
        }
        console.log(str);
        str=""
    }
}

pattern6(3)