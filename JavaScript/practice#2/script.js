// Нужно вернуть массив только с чётными числами.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const findEvenNumbers = arr => arr.filter(item => item%2 === 0)
console.log(findEvenNumbers(numbers))

// Нужно вернуть массив строк вида "Число: X".
// X = число из массива на данной итерации
const numbers2 = [10, 20, 30];

const convertArray = (arr)=> arr.map(item=>`Число: ${item}`)
console.log(convertArray(numbers2))

// Нужно найти первое слово, длина которого больше 5 символов.
const words = ["кот", "машина", "дом", "компьютер", "море"];

const findFirstWordLengthFive = arr => arr.find(item => item.length > 5)
console.log(findFirstWordLengthFive(words))

// Нужно найти индекс числа 50.
const numbers3 = [10, 20, 30, 50, 60];

const findIndexItem = arr => arr.findIndex(item => item === 50)
console.log(findIndexItem(numbers3))


// Нужно проверить, есть ли в массиве хотя бы одно отрицательное число.
const numbers4 = [1, 5, -3, 7];

const toCheckNegativeNumber = arr => arr.some(item => item < 0)
console.log(toCheckNegativeNumber(numbers4))

// Нужно объединить два массива в один.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const concatArrays = (arr1, arr2) => arr1.concat(arr2)
console.log(concatArrays(arr1,arr2))

// Нужно удалить элемент по индексу 2.
const numbers5 = [10, 20, 30, 40, 50];

const deleteElemetsOfArray = arr => {
    const copyOfOriginalArray = [...arr] // делаем копию, чтобы не изменять оригинал
    copyOfOriginalArray.splice(2,1)
    return copyOfOriginalArray
}
console.log(deleteElemetsOfArray(numbers5))
