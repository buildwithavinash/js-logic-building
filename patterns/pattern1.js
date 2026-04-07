
// * * * *
// * * * *
// * * * *
// * * * *
// outer loop for rows and inner loop for cols



function printPattern1(n){
    let str = ""
for(let i = 0; i<n; i++){
    for(let j = 0; j<n; j++){
        str += "* "
    }
    console.log(str);
    str = ""
}
}

printPattern1(5)
