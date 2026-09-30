let arr = [0, 2, 1, 2, 9, -1, 0, 9];
let repeated = [];

for(let i = 0; i < arr.length; i++){

    for(let j = i+1; j < arr.length; j++){

        if(arr[i] === arr[j] && !arr.includes(arr[i])){
            repeated = [...repeated, arr[i]];
        }

    }

}
console.log(repeated); // => [0, 2, 9]