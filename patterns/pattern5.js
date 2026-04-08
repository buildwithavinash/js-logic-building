// * * * * * 
// * * * * 
// * * *
// * *
// *

function pattern5(n){
    let str = "";
    for(let i = 1; i<=n; i++){
        for(let j=1; j<=n-i+1; j++){
            str += `* `
        }

        console.log(str);
        str = ""
    }
}

pattern5(5)