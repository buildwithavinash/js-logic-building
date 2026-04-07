// reverse an arr

const reverse = (arr) => {
    let revArr = [];

   for(let i = arr.length-1; i>=0; i--){
    revArr.push(arr[i]);
   }

   return revArr;
}

const reverseInplace = (arr) => {
    for(let i = 0; i<arr.length; i++){
        arr[i] = arr[arr.length-i-1]
    }

    return arr;
}
console.log(reverse([4, 5, 6, 6, 2]))
console.log(reverseInplace([4, 5, 6, 6, 2]))
