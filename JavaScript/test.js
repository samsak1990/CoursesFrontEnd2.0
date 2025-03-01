// // Напишите функцию`joinWords(arr, separator)`, которая объединяет массив строк в одну строку, используя заданный разделитель.  


// function joinWords(arr, separator){
//     return arr.join(separator)
// }

// console.log(joinWords(["apple", "banana", "cherry"], "/ ")); // "apple, banana, cherry"

// function getSubArray(arr, start, end){
//     return arr.slice(start,end)
// }

// console.log(getSubArray([1, 2, 3, 4, 5], 1, 3)); // [2, 3]


// console.log(typeof a)
// var a = 5

// const numbers = [12, 5, 8, 130, 44, 27]

// function findSecondMaxValue(arr){
//     let first = 0, second = 0
//     for(let i = 0; i<=arr.length; i++){
//         if(arr[i] > first){
//             second = first
//             first = arr[i]
//         } else if(arr[i] < first && arr[i] > second) {
//             second = arr[i]
//         }
//     }
//     return second
// }

// console.log(findSecondMaxValue(numbers))



Number.prototype.convertToString = function(str){
    return `${str}` 
}

const num = 10
console.log(typeof num)
console.log(typeof num.convertToString())