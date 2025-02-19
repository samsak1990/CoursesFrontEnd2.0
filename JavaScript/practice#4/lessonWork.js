// const arr = [1,2,3,4,5,6,7]

// const obj = {
//     name: 'Poul',
//     phone: 37522314,
//     city: 'Minks'
// }

// for(let i of arr){
//     console.log(i)
// }

// for(let i in obj){
//     console.log(`${i}: ${obj[i]}`)
// }

// console.log(Object.values(obj))
// console.log(Object.keys(obj))


// function copyObject(target){
//     const emptyObject = {}
//     for(let prop in target){
//         emptyObject[prop] = target[prop]
//     }
//     return emptyObject
// }

// console.log(copyObject(obj))

const users = [
    { name: 'Alice', role: 'user' },
    { name: 'Bob', role: 'admin' },
    { name: 'Charlie', role: 'user' },
  ];
  
const isAdmin = (arr)=>{
    let admin = false
    for(let i=0; i<arr.length; i++){
        if(arr[i].role === 'admin'){
            admin = true
        }
    }
    return admin
}

const isAdmin1 = (arr)=>{
    let admin = false
    arr.forEach(user=>{
        if(user.role === 'admin'){
            admin = true
        }
    })
    return admin
}

// console.log(isAdmin1(users))

const numbers1 = [1, 2, 3, 4, 5];
const numbers2 = [1, 2, 3, 4, 1];

const isUniqMembers = (arr) => {
    return new Set(arr).size == arr.length ? 'Uniq' : 'Not uniq'
}

// console.log(isUniqMembers(numbers2))

const words = ["banana", "kiwi", "grapefruit", "apple"];

const sortedWords = (arr) => {
    return arr.sort((a,b)=> a.length - b.length)
}

// console.log(sortedWords(words))


// 5. Комплексная обработка массива объектов 
// Дан массив заказов.Нужно:
// - оставить только оплаченные заказы(`paid: true`),
// - отсортировать по цене по убыванию,
// - вернуть массив строк в формате`"<имя>: <цена>"`.
const orders = [
    { customer: "Alice", price: 300, paid: true },
    { customer: "Bob", price: 100, paid: false },
    { customer: "Charlie", price: 500, paid: true },
    { customer: "David", price: 150, paid: true },
  ];

const newArr = (arr)=>{
return arr.filter(item=>item.paid).sort((a,b) => a.price - b.price).map(item=>`${item.customer} : ${item.price}`)
}

console.log(newArr(orders))

const words1 = ["apple", "banana", "grape", "kiwi"];

const isAInWord = arr =>{
    return arr.filter(word=> word.includes('a'))
}

// console.log(isAInWord(words1))