// 1 
// 1 2 
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

function pattern3(n){
    let str = "";
    for(let i = 1; i<=n; i++){
        for(let j = 1; j<=i; j++){
            str += `${j} `
        }
        console.log(str);
        str=""
    }
}

pattern3(7);