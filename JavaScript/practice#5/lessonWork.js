
// //  11. Сумма четных чисел массива  
// // const numbers = [12, 5, 8, 130, 44, 27];
// // Найдите сумму всех четных чисел.  
// ser 
// let sum = 0 
//  let i=0
//  while(i<numbers.length){
//     if(numbers[i]%2===0) sum +=numbers[i]
// i++
// }
// let sum = 0
// for(let i =0;  i<numbers.length;i++){
//  sum+=numbers[i]
// }
// log(sum)
// let sum = arr.reduce((acc, item) =>  acc += item % 2 ? 0 : item, 0);


// //  12.123 Поиск наибольшего числа в массиве  
// // Найдите максимальное число в массиве `numbers`.  

// // const numbers = [12, 5, 8, 130, 44, 27];
// function maxNamb(array){
// let max=numbers[0]
// for(let i=1,i <array.length ,i++){
// if(max>array[i]){
// max = array[i]
// }
// }

// //  13. Поиск второго по величине числа  
// // Найдите второе по величине число в массиве.  
// // const numbers = [12, 5, 8, 130, 44, 27];

// function findSecondMaxValue(arr){
//  let first = -Infinity, second
//  for(let i = 0; i<=arr.length; i++){
//      if(arr[i] > first){
//          second = first
//          first = arr[i]
//      } else if(arr[i] < first && arr[i] >= second) {
//          second = arr[i]
//      }
//  }
//  return second
// }