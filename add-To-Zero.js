// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

let solution = false

// Write your solution below:
for(let i = 0; i < array.length; i++){
    for(let k = i+1; k < array.length; k++){
        // console.log(i,k)
    if(array[i] + array[k] === 0){
        solution = true;
}
    }
}
console.log(solution)

const zero = (array) => {}