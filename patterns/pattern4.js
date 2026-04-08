// 1 
// 2 2 
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

function pattern4(n){
    let str = "";
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            str += `${i} `
        }
        console.log(str);
        str=""
    }
}

pattern4(5)