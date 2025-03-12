
// // 1. Напишите функцию checkType(value), которая принимает значение и возвращает его тип данных в виде строки.
// // checkType(42); // "number"
// // checkType("Hello"); // "string"

// const checkType = (value)=>{ 
//     return typeof value
// }

// // slava 2. Напишите функцию isTruthy(value), которая принимает любое значение и возвращает true, если оно приводится к true, и false в противном случае.
// // isTruthy(1); // true
// // isTruthy(0); // false
// // isTruthy(""); // false
// function isTruthy(value){
//     return !!value;
// }
// // 3.вит Напишите функцию calculate(a, b), которая принимает два числа и возвращает объект с их суммой, разностью, произведением и частным.
// //   calculate(6, 3);
// // { sum: 9, difference: 3, product: 18, quotient: 2 }
// function Calc  (a,b){
// return{
// sum:a+b,
// difference:a-b,
// product:a*b,
// quotient:a/b,
// } } 

// // 4. Паша Напишите функцию smartType(value), которая правильно определяет тип данных, включая null, массивы и функции.
// // smartType(null); // "null"
// // smartType([]); // "array"
// // smartType({}); // "object"
// // smartType(() => { }); // "function"

// const smartType = value => {
//     if(value === null)  return 'null'
    
//     if(Array.isArray(value)) return 'array'
    
//     return typeof value
// }



// // 5. Паша Напишите функцию closestTo100(a, b), которая возвращает число, ближе всего к 100.
// // closestTo100(80, 110); // 110
// // closestTo100(95, 105); // 105



// const closestTo100 = (...args)=>{
//     let startValue, currentItem;
//     for(let i = 0; i <= args.length; i++){
//         let result = Math.abs(100 - args[i])
//             if (startValue > result || startValue === undefined){
//                 startValue = result
//                 currentItem = args[i]
//             } 
//         } 
//     return currentItem
// }

// // 6.вит  Напишите функцию, которая принимает age и возвращает "child", "teen", "adult".Используйте switch
// // до 13 - "child"
// // с 13 до 18 - "teen"
// // с 18 "adult
// function foo(age){
//     switch (true){
//         case age < 13:
//             return "child";
//         case age <18:
//             return "teen"
//         default: return "adult"
//     }
// }

// // 7. Реализуйте factorial(n) через for.

// function factorial(n){
//     let fact=1;
//     for(let i=2; i<=n; i++){
//     fact*=i
        
//     }
//     return fact
// }

// // 8. Slava Фильтруйте массив слов, оставляя только те, что содержат букву a.
// // const words = ["apple", "banana", "cherry", "dog"];
// const words = ["apple", "banana", "cherry", "dog"];
// const filWords = words.filter(word => word.includes('a'))

// // 9. Паша Напишите функцию`findMissingNumber`, которая принимает массив из `n-1` чисел(от 1 до`n`) и находит отсутствующее число.
// // findMissingNumber([1, 2, 3, 5]);

// const findMissingNumber = (arr)=>{
//     for(let num in arr){
//         if((arr[num]+1 != arr[+num+1]) && arr[+num+1]){
//             return `Miss - ${arr[num]+1}`
//         }
//     }
//     return "It's OK"
// }
// // 10.вит  Реализуйте функцию`removeDuplicates`, которая удаляет дубликаты из массива без использования`Set`.
// // removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// function removeDuplicates (array){
//     let result = []
//     for (let i=0;i<array.length; i++){
//         if (!result.includes(array[i])){
//             result.push(array[i])
//         }
//     }
//     return result
// }


// function removeDuplicates1 (array){
// return arr.filter((item,index)=>arr.indexOf(item) === index)

// // 11. сер Напишите функцию`deepClone`, которая делает глубокое клонирование объекта.
// // deepClone({ a: { b: 2 } });
// const clone = JSON.parse(JSON.stringify(deepClone))







// // 12. Реализуйте функцию`mergeObjects`, которая объединяет два объекта, но при конфликте значений оставляет большее число.
// // mergeObjects({ a: 1, b: 3 }, { b: 5, c: 2 });


// // 13. Напишите функцию`invertObject`, которая меняет ключи и значения местами.
// // invertObject({ a: "one", b: "two" });


// // 14. Реализуйте функцию`isAnagram`, которая проверяет, являются ли две строки анаграммами.
// // isAnagram("listen", "silent");

// // 15. slava Напишите функцию`findLongestWord`, которая находит самое длинное слово в строке.
// // findLongestWord("The quick brown fox jumps over the lazy dog");
// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longWord = '';
//     for (const word of words) {
//         if(words.length > longWord.length){
//             longWords = word;
//         }
//     }
//     return longWords
// }


// 4. Паша  Создание объекта из аргументов
// `createObject("name", "John", "age", 25) // { name: "John", age: 25 }`.

function createObject(...args){
    console.log(args[0])
    const result = {}
    for(let i = 0; i<args.length; i++){
        if(i+1 < args.length){
            result[args[i]] = args[i+1]
        }
        
    }

    return result
}

// console.log(createObject("name", "John", "age", 25))

// 25. Паша Поиск объекта с максимальным количеством вложенных элементов
// Найти объект, у которого максимальное количество элементов во вложенном массиве skills.
const users = [
  { id: 1, name: "Alice", skills: ["JS", "React"] },
  { id: 2, name: "Bob", skills: ["HTML", "CSS", "JS", "Node.js"] },
  { id: 3, name: "Charlie", skills: ["Python", "Django"] }
];

function maxInnerElements(arr){
    let maxL = 0, resObj;
    for(let item of arr){
        if(item.skills.length > maxL) {
            maxL = item.skills.length
            resObj = item
        }
        continue
    }
    return resObj
}

console.log(maxInnerElements(users))
